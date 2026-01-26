import { createRouter, createWebHashHistory } from 'vue-router'

// páginas
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(), // 👈 funciona no GitHub Pages
  routes
})

export default router
