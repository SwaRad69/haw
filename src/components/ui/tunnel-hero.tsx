"use client";

import * as THREE from "three";
import { useRef, useEffect, useState, useCallback } from "react";

/* ----------------------------- utilities ----------------------------- */

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile("matches" in e ? e.matches : (e as any).matches);

    setIsMobile(mq.matches);

    try {
      mq.addEventListener("change", onChange as any);
      return () => mq.removeEventListener("change", onChange as any);
    } catch {
      mq.addListener(onChange as any);
      return () => mq.removeListener(onChange as any);
    }
  }, [breakpoint]);

  return isMobile;
}

/* ----------------------------- shared shader ----------------------------- */

const vertexShader = `void main(){ gl_Position = vec4(position, 1.0); }`;

const fragmentShader = `
uniform float iTime;
uniform vec3 iResolution;

#define TAU 6.2831853071795865
#define TUNNEL_LAYERS 120
#define RING_POINTS 64
#define POINT_SIZE 2.2
#define POINT_COLOR_A vec3(0.46, 0.72, 0.0) // Primary Green
#define POINT_COLOR_B vec3(0.46, 1.0, 0.0)  // Neon Green
#define SPEED 1.2

float sq(float x){ return x*x; }

// Hash function for randomness
float hash(float n) { return fract(sin(n) * 43758.5453123); }

vec2 AngRep(vec2 uv, float angle){
  vec2 polar = vec2(atan(uv.y, uv.x), length(uv));
  polar.x = mod(polar.x + angle/2.0, angle) - angle/2.0;
  return polar.y * vec2(cos(polar.x), sin(polar.x));
}

float sdCircle(vec2 uv, float r){ return length(uv) - r; }

vec3 MixShape(float sd, vec3 fill, vec3 target){
  float blend = smoothstep(0.0, 1.5/iResolution.y, sd);
  return mix(fill, target, blend);
}

// More chaotic path for "wormhole" feel
vec2 TunnelPath(float x){
  vec2 offs = vec2(
    0.4 * sin(TAU * x * 0.4) + 0.3 * sin(TAU * x * 0.7 + 0.5),
    0.3 * cos(TAU * x * 0.3) + 0.4 * cos(TAU * x * 0.15 + 1.2)
  );
  // Add some jitter
  offs += 0.05 * vec2(sin(x * 10.0), cos(x * 11.0));
  return offs;
}

void main(){
  vec2 res = iResolution.xy / iResolution.y;
  vec2 uv = gl_FragCoord.xy / iResolution.y - res/2.0;
  
  // Radial distortion (stretching at edges)
  float dist = length(uv);
  uv *= 1.0 - 0.2 * dist;

  vec3 color = vec3(0.0);
  float repAngle = TAU / float(RING_POINTS);
  float camZ = iTime * SPEED;
  vec2 camOffs = TunnelPath(camZ);

  for(int i = 1; i <= TUNNEL_LAYERS; i++){
    float pz = 1.0 - (float(i) / float(TUNNEL_LAYERS));
    // Cycling logic
    pz -= mod(camZ * 0.5, 4.0 / float(TUNNEL_LAYERS));
    
    vec2 pathPos = TunnelPath(camZ + pz);
    vec2 offs = pathPos - camOffs;
    
    // Perspective sizing
    float ringRad = 0.12 * (1.0 / (pz * pz * 0.6 + 0.3));
    
    // Streak logic: lengthen the "dots" along the trajectory
    float streakLen = 1.0 + (1.0 - pz) * 5.0;
    
    if(abs(length(uv + offs) - ringRad) < 0.05){
      vec2 aruv = AngRep(uv + offs, repAngle);
      
      // Rotate points slightly over time for a spiral effect
      float angleRot = pz * 5.0 + iTime * 0.2;
      float s = sin(angleRot), c = cos(angleRot);
      aruv = vec2(aruv.x * c - aruv.y * s, aruv.x * s + aruv.y * c);

      float pointSize = (POINT_SIZE / (2.0 * iResolution.y)) * (1.5 - pz);
      float pdist = sdCircle(aruv - vec2(ringRad, 0), pointSize);
      
      vec3 ptColor = (mod(float(i), 2.0) == 0.0) ? POINT_COLOR_A : POINT_COLOR_B;
      
      // Energy flicker
      ptColor *= 0.8 + 0.4 * hash(float(i) + floor(iTime * 15.0));
      
      // Depth fade
      float shade = pow(1.0 - pz, 2.5);
      color = MixShape(pdist, ptColor * shade, color);
    }
  }

  // Central energy core glow
  float centerGlow = 0.005 / length(uv + TunnelPath(camZ + 0.9) - camOffs);
  color += POINT_COLOR_B * centerGlow * 0.3;

  float alpha = clamp(max(max(color.r, color.g), color.b) * 1.5, 0.0, 1.0);
  gl_FragColor = vec4(color, alpha);
}
`;

/* ----------------------------- three helpers ----------------------------- */

type ThreeContext = {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;
  geometry: THREE.PlaneGeometry;
};

function createThreeForCanvas(canvas: HTMLCanvasElement, width: number, height: number): ThreeContext | null {
  if (typeof window === "undefined") return null;

  try {
    // Standard WebGL context check
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return null;

    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true, 
      alpha: true, 
      failIfMajorPerformanceCaveat: false,
      powerPreference: "high-performance"
    });
    
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3(width, height, 1) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    return { renderer, scene, camera, material, mesh, geometry };
  } catch (e) {
    return null;
  }
}

function disposeThree(ctx: ThreeContext) {
  try {
    ctx.scene.remove(ctx.mesh);
    ctx.mesh.geometry.dispose();
    ctx.material.dispose();
    ctx.renderer.dispose();
  } catch (e) {}
}

/* ----------------------------- TunnelBackground ----------------------------- */

export function TunnelBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<ThreeContext | null>(null);
  const lastTimeRef = useRef<number>(0);
  const animRef = useRef<number | null>(null);
  const pausedRef = useRef<boolean>(false);
  const rafResizeRef = useRef<boolean>(false);

  const animate = useCallback((time: number) => {
    if (!ctxRef.current) return;
    animRef.current = requestAnimationFrame(animate);
    if (pausedRef.current) {
      lastTimeRef.current = time;
      return;
    }
    time *= 0.001;
    const delta = time - (lastTimeRef.current || time);
    lastTimeRef.current = time;
    ctxRef.current.material.uniforms.iTime.value += delta;
    ctxRef.current.renderer.render(ctxRef.current.scene, ctxRef.current.camera);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === "undefined") return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const ctx = createThreeForCanvas(canvas, width, height);
    if (!ctx) return; 
    
    ctxRef.current = ctx;

    const handleResize = () => {
      if (!ctxRef.current) return;
      if (rafResizeRef.current) return;
      rafResizeRef.current = true;
      requestAnimationFrame(() => {
        rafResizeRef.current = false;
        const w = window.innerWidth;
        const h = window.innerHeight;
        ctxRef.current!.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        ctxRef.current!.renderer.setSize(w, h);
        (ctxRef.current!.material.uniforms.iResolution.value as THREE.Vector3).set(w, h, 1);
      });
    };
    window.addEventListener("resize", handleResize);

    const handleVisibility = () => {
      pausedRef.current = !!document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);
    handleVisibility();

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (ctxRef.current) {
        disposeThree(ctxRef.current);
        ctxRef.current = null;
      }
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-90 z-[-1]"
      id="tunnel-canvas"
    />
  );
}

export default function TunnelShowcase() {
    return <TunnelBackground />;
}
