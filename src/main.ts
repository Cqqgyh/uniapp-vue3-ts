import { createSSRApp } from 'vue'
import pinia from './store/index'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
    pinia
  }
}
