import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

window.Kakao.init('92ddbe96f26024eeda9baa85e66180e5')
window.Kakao.isInitialized()
