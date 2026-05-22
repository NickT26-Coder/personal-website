import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import githubPages from 'vite-plugin-github-pages';

export default defineConfig({
  plugins: [react(), githubPages()],
  base: '/personal-react-site/',
  test: {
	globals: true,
	environment: 'jsdom',
	setupFiles: './src/setupTests.js'
  }
});
