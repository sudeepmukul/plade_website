export default function manifest() {
  return {
    name: 'PLADE — FPS Coding Game',
    short_name: 'PLADE',
    description:
      'The world\'s first FPS coding education game. Learn Python, Java, and C through immersive Unreal Engine 5 gameplay with AI-powered code evaluation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07080C',
    theme_color: '#00E676',
    orientation: 'portrait-primary',
    categories: ['education', 'games'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
