
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/searchresults',
    name: 'Search Results',
    component: () => import('../views/SearchResults.vue')
  },
  {
    path: '/Explore',
    name: 'Explore',
    component: () => import('../views/Explore.vue')
  },
  {
    path: '/Account',
    name: 'Account',
    component: () => import('../views/Account.vue')
  },
  {
    path: '/meal-plan',
    name: 'Meal Planning',
    component: () => import('../views/MealPlan.vue')
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: () => import('../views/Recipe.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
