'use server';
/**
 * @fileOverview A Genkit flow for generating AI-driven insights or solution demonstrations based on a simulated regulatory query.
 *
 * - queryRegulatoryInsight - A function that processes a simulated regulatory query.
 * - RegulatoryInsightQueryInput - The input type for the queryRegulatoryInsight function.
 * - RegulatoryInsightQueryOutput - The return type for the queryRegulatoryInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RegulatoryInsightQueryInputSchema = z.object({
  query: z.string().describe('A simulated regulatory query from the user.'),
});
export type RegulatoryInsightQueryInput = z.infer<typeof RegulatoryInsightQueryInputSchema>;

const RegulatoryInsightQueryOutputSchema = z.object({
  insight: z
    .string()
    .describe('An AI-driven insight or solution demonstration based on the regulatory query.'),
});
export type RegulatoryInsightQueryOutput = z.infer<typeof RegulatoryInsightQueryOutputSchema>;

export async function queryRegulatoryInsight(
  input: RegulatoryInsightQueryInput
): Promise<RegulatoryInsightQueryOutput> {
  return regulatoryInsightQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'regulatoryInsightAgentPrompt',
  input: {schema: RegulatoryInsightQueryInputSchema},
  output: {schema: RegulatoryInsightQueryOutputSchema},
  prompt: `You are the "HACK 'A' WAR" Regulatory Intelligence Agent. Your mission is to provide concise, impactful, and AI-driven insights or solution demonstrations for regulatory queries.

Demonstrate the core value and capabilities of the agent, highlighting how it transforms complex regulatory data into actionable intelligence. Focus on real-time tracking, AI-powered risk scoring, and automated compliance alerts.

Based on the following simulated regulatory query, generate a powerful insight or a brief solution demonstration:

Query: {{{query}}}`,
});

const regulatoryInsightQueryFlow = ai.defineFlow(
  {
    name: 'regulatoryInsightQueryFlow',
    inputSchema: RegulatoryInsightQueryInputSchema,
    outputSchema: RegulatoryInsightQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('No insight generated.');
    }
    return output;
  }
);
