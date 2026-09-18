import type { VercelRequest, VercelResponse } from '@vercel/node';
import { executeGeminiWasteAnalysis } from '../../src/server/geminiWasteAnalysis';

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
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.',
      status: 405,
    });
  }

  try {
    console.log('[API /api/gemini/analyze-waste] Request reached the server. Method:', req.method);

    const input = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!input || !input.wasteName) {
      console.warn('[API /api/gemini/analyze-waste] Missing required parameter: wasteName');
      return res.status(400).json({
        success: false,
        error: 'Missing required waste input parameters (wasteName required).',
        status: 400,
      });
    }

    const result = await executeGeminiWasteAnalysis(input);
    return res.status(200).json({ success: true, data: result });
  } catch (err: any) {
    const errorMessage = err?.message || (typeof err === 'string' ? err : 'AI analysis could not be completed. Please try again.');
    console.error('[API /api/gemini/analyze-waste Error] Exact exception message:', errorMessage);
    return res.status(500).json({
      success: false,
      error: errorMessage,
      status: 500,
    });
  }
}
