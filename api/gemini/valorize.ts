import type { VercelRequest, VercelResponse } from '@vercel/node';
import { executeGeminiValorization } from '../../src/server/geminiValorization';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const input = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!input || !input.wasteName) {
      return res.status(400).json({
        error: 'Missing required valorization input parameters (wasteName required).',
      });
    }

    const result = await executeGeminiValorization(input);
    return res.status(200).json({ success: true, data: result });
  } catch (err: any) {
    console.error('Serverless Gemini Valorization Error:', err?.message || err);
    return res.status(500).json({
      error: err?.message || 'AI valorization decision could not be completed. Please try again.',
    });
  }
}
