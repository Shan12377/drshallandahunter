export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Gemini-Bot'],
        allow: '/',
      },
    ],
    sitemap: 'https://drshallandahunter.com/sitemap.xml',
    host: 'https://drshallandahunter.com',
  };
}
