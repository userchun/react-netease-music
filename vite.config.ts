import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import usePluginImport from 'vite-plugin-importer';
import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    usePluginImport({
      libraryName: 'ant-design-vue',
      libraryDirectory: 'es',
      style: 'css',
    }),

    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  server: {
    port: 4000,
    hmr: { overlay: false },
    open: true,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    terserOptions: {
      compress: {
        keep_infinity: true,
      },
    },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 1200,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      less: {
        javascriptEnabled: true,
      },
    },
  },
  optimizeDeps: {
    include: [
      'axios',
      'antd',
      'antd/es/locale/zh_CN',
      'moment/dist/locale/zh-cn',
      'antd/es/locale/en_US',
      'moment/dist/locale/eu',
    ],
  },
});
