/**
 * Tech logo mapping helper.
 * Maps technology names to their SVG assets in /logos/.
 */

const TECH_LOGO_MAP: Record<string, { logo: string; isMonochrome?: boolean }> = {
  'plasmo': { logo: '/logos/plasmo.svg', isMonochrome: false },
  'react': { logo: '/logos/react.svg', isMonochrome: false },
  'typescript': { logo: '/logos/typescript.svg', isMonochrome: false },
  'javascript': { logo: '/logos/javascript.svg', isMonochrome: false },
  'tailwind css': { logo: '/logos/tailwindcss.svg', isMonochrome: false },
  'tailwind': { logo: '/logos/tailwindcss.svg', isMonochrome: false },
  'supabase': { logo: '/logos/supabase.svg', isMonochrome: false },
  'deepgram': { logo: '/logos/deepgram.svg', isMonochrome: true },
  'web speech api': { logo: '/logos/chrome.svg', isMonochrome: false },
  'chrome': { logo: '/logos/chrome.svg', isMonochrome: false },
  'python': { logo: '/logos/python.svg', isMonochrome: false },
  'openai api': { logo: '/logos/openai.svg', isMonochrome: true },
  'openai': { logo: '/logos/openai.svg', isMonochrome: true },
  'langchain': { logo: '/logos/langchain.svg', isMonochrome: true },
  'hugging face': { logo: '/logos/huggingface.svg', isMonochrome: false },
  'vector search': { logo: '/logos/huggingface.svg', isMonochrome: false },
  'prompt guardrails': { logo: '/logos/openai.svg', isMonochrome: true },
  'ollama': { logo: '/logos/ollama.svg', isMonochrome: true },
  'node.js': { logo: '/logos/nodejs.svg', isMonochrome: false },
  'nodejs': { logo: '/logos/nodejs.svg', isMonochrome: false },
  'express.js': { logo: '/logos/express.svg', isMonochrome: true },
  'express': { logo: '/logos/express.svg', isMonochrome: true },
  'next.js': { logo: '/logos/nextjs.svg', isMonochrome: true },
  'postgresql': { logo: '/logos/postgresql.svg', isMonochrome: false },
  'mysql': { logo: '/logos/mysql.svg', isMonochrome: false },
  'vite': { logo: '/logos/vite.svg', isMonochrome: false },
  'css3': { logo: '/logos/css3.svg', isMonochrome: false },
  'css': { logo: '/logos/css3.svg', isMonochrome: false },
  'html5': { logo: '/logos/html5.svg', isMonochrome: false },
  'html': { logo: '/logos/html5.svg', isMonochrome: false },
  'git': { logo: '/logos/git.svg', isMonochrome: false },
  'github': { logo: '/logos/github.svg', isMonochrome: true },
  'vs code': { logo: '/logos/vscode.svg', isMonochrome: false },
  'cursor': { logo: '/logos/cursor.svg', isMonochrome: true }
};

export const getTechLogo = (techName: string): { logo: string; isMonochrome?: boolean } | null => {
  const normalized = techName.trim().toLowerCase();
  if (TECH_LOGO_MAP[normalized]) {
    return TECH_LOGO_MAP[normalized];
  }
  
  // Partial search
  for (const [key, value] of Object.entries(TECH_LOGO_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return value;
    }
  }

  return null;
};
