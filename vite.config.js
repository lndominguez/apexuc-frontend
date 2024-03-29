import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // checker({
    //   eslint: {
    //     lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
    //   },
    //   overlay: {
    //     initialIsOpen: false,
    //   },
    // }),
  ],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
    ],
  },
  server: {
  //   fs: {
  //     strict: false,
  //   },
  //   proxy: {
  //     "/api": {
  //       target: "http://api.apexucode.com",
  //       changeOrigin: true,
  //       secure: false, rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
    port: 3030,
  },
  preview: {
    port: 3030,
  }
})
