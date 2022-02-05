import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllSquads from '../views/AllSquads.vue'
import AllSoldiers from '../views/AllSoldiers.vue'
import AllLoadouts from '../views/AllLoadouts.vue'
import AllMissions from '../views/AllMissions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/squads',
    name: 'Squads',
    component: AllSquads
  },
  {
    path: '/soldiers',
    name: 'Soldiers',
    component: AllSoldiers
  },
  {
    path: '/loadouts',
    name: 'Loadouts',
    component: AllLoadouts
  },
  {
    path: '/missions',
    name: 'Missions',
    component: AllMissions
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
