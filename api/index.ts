import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const hasKey = Boolean(
    (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== '') ||
      (process.env.GOOGLE_GEMINI_API_KEY && process.env.GOOGLE_GEMINI_API_KEY.trim() !== '') ||
      (process.env.GOOGLE_API_KEY && process.env.GOOGLE_API_KEY.trim() !== '') ||
      (process.env.VITE_GEMINI_API_KEY && process.env.VITE_GEMINI_API_KEY.trim() !== '')
  );

  res.status(200).json({
    status: 'ok',
    service: 'WasteX AI Backend API',
    hasGeminiKey: hasKey,
    nodeEnv: process.env.NODE_ENV || 'production',
    endpoints: ['/api/health', '/api/gemini/analyze-waste', '/api/gemini/valorize'],
    timestamp: new Date().toISOString(),
  });
}
