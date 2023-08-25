import { createSSRApp } from 'vue'
import pinia from './store/index'
import App from './App.vue'
import './style/index.css'
export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
    pinia
  }
}
