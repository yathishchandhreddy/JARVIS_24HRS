import 'dotenv/config';
import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { executeGeminiWasteAnalysis } from './src/server/geminiWasteAnalysis';
import { executeGeminiValorization } from './src/server/geminiValorization';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '20mb' }));
  app.use(express.urlencoded({ extended: true, limit: '20mb' }));

  // Health and runtime capability check
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      hasGeminiKey: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== ''),
      nodeEnv: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
    });
  });

  // Secure Server-Side Gemini Waste Analysis Endpoint
  app.post('/api/gemini/analyze-waste', async (req, res) => {
    try {
      const input = req.body;
      if (!input || !input.wasteName) {
        return res.status(400).json({
          error: 'Missing required waste input parameters (wasteName required).',
        });
      }

      const result = await executeGeminiWasteAnalysis(input);
      return res.json({ success: true, data: result });
    } catch (err: any) {
      console.error('Server Gemini Analysis Error:', err?.message || err);
      return res.status(500).json({
        error: err?.message || 'AI analysis could not be completed. Please try again.',
      });
    }
  });

  // Secure Server-Side Gemini Valorization Endpoint
  app.post('/api/gemini/valorize', async (req, res) => {
    try {
      const input = req.body;
      if (!input || !input.wasteName) {
        return res.status(400).json({
          error: 'Missing required valorization input parameters (wasteName required).',
        });
      }

      const result = await executeGeminiValorization(input);
      return res.json({ success: true, data: result });
    } catch (err: any) {
      console.error('Server Gemini Valorization Error:', err?.message || err);
      return res.status(500).json({
        error: err?.message || 'AI valorization decision could not be completed. Please try again.',
      });
    }
  });

  // Vite middleware in development vs static serving in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
