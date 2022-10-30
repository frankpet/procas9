import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { Ziggy } from './ziggy';
import createServer from '@inertiajs/server';





createServer((page) => createInertiaApp({
  page,
  render: renderToString,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  title: title => title ? `${title} - Ping CRM` : 'Ping CRM',
  setup({ app, props, plugin }) {
    return createSSRApp({
      render: () => h(app, props),
    }).use(plugin)
      .use(ZiggyVue, Ziggy)


  },
}))
