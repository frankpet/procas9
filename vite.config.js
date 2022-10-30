import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

const host = 'procasco.test';

export default defineConfig({
  server: {
    host,
    hmr: { host }
  },
  plugins: [
    laravel({
      input: ["resources/sass/app.scss", "resources/js/app.js"],
      ssr: 'resources/js/ssr.js',
      refresh: true,
    }),

    // {
    //   name: 'blade',
    //   handleHotUpdate({ file, server }) {
    //     if (file.endsWith('.blade.php')) {
    //       server.ws.send({
    //         type: 'full-reload',
    //         path: '*',
    //       });
    //     }
    //   },
    // },
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  ssr: {
    noExternal: ['laravel-vite-plugin', '@inertiajs/server'],
  },
  resolve: {
    alias: {

    },
  },

});
