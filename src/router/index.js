import { createRouter, createWebHistory } from 'vue-router'
import Armas from '../views/Armas.vue'
import Ranking from '../views/ranking/Ranking.vue'
import Partidas from '../views/partidas/Partidas.vue'
import DetalhesPartida from '../views/partidas/DetalhesPartida.vue'

const routes = [
  {
    path: '/',
    name: 'Partidas',
    component: Partidas
  },
  {
    path: '/armas',
    name: 'Armas',
    component: Armas
  },
  {
    path: '/ranking/:id',
    name: 'Ranking',
    component: Ranking
  },
  {
    path: '/partidas/:id',
    name: 'DetalhesPartida',
    component: DetalhesPartida
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
