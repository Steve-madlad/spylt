import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@sections': path.resolve(__dirname, 'src/components/sections'),
    },
  },
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
});
