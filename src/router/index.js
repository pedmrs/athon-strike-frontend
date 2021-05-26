import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Armas from '../views/Armas.vue'
import Ranking from '../views/Ranking.vue'
import Partidas from '../views/partidas/Partidas.vue'
import DetalhesPartida from '../views/partidas/DetalhesPartida.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/armas',
    name: 'Armas',
    component: Armas
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking
  },
  {
    path: '/partidas',
    name: 'Partidas',
    component: Partidas
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
