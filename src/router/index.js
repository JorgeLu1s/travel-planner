import Vue from 'vue'
import Router from 'vue-router'
import TravelList from '@/components/TravelList'
import TravelForm from '@/components/TravelForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/new',
      name: 'TravelForm',
      component: TravelForm
    },
    {
      path: '/',
      name: 'TravelList',
      component: TravelList
    }
  ]
})
