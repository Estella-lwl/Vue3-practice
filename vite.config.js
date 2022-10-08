import { defineConfig } from 'vite';
const { resolve } = require('path');
import vue from '@vitejs/plugin-vue';
import webpackConfig from './src/config/package.ts';

export default defineConfig({
  base: webpackConfig.PUBLIC_PATH,
  publicDir: resolve(__dirname, 'public'),
  assetsInclude: resolve(__dirname, 'src/assets'),
  resolve: {
    // 别名
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // server: {
  //   port: webpackConfig.PORT,
  //   proxy: {
  //     '/api': {
  //       target: webpackConfig.PROXY_URL,
  //       changeOrigin: true, //是否跨域
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
  build: {
    sourcemap: !webpackConfig.IS_PRODUCTION,
  },
  plugins: [vue()],
});
