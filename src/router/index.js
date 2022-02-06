import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllSquads from '../views/AllSquads.vue'
import AllSoldiers from '../views/AllSoldiers.vue'
import AllLoadouts from '../views/AllLoadouts.vue'
import AllMissions from '../views/AllMissions.vue'
import SingleSquad from '../views/SingleSquad.vue'
import SingleSoldier from '../views/SingleSoldier.vue'
import SingleMission from '../views/SingleMission.vue'
import Login from '@/views/Login.vue';

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
  },
  {
    path: '/squads/:id',
    name: 'SingleSquad',
    component: SingleSquad
  },
  {
    path: '/soldiers/:id',
    name: 'SingleSoldier',
    component: SingleSoldier
  },
  {
    path: '/missions/:id',
    name: 'SingleMission',
    component: SingleMission
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
