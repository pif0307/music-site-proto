import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoardComponent from '../views/Home.vue'
import HistoryComponent from '../views/History.vue'
import StarredComponent from '../views/Starred.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashBoardComponent
  },
  {
    path: '/history',
    name: 'About',
    
    component: HistoryComponent
  },
  {
    path: '/starred',
    name: 'Starred',

    component: StarredComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
