import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/icons'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.component('v-icon', Icon)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/roster',
      name: 'roster',
      component: require('@/components/Roster/index').default
    },
    {
      path: '/newpilot',
      name: 'new-pilot',
      component: require('@/components/NewPilot/index').default
    },
    {
      path: '/mods',
      name: 'mod-editor',
      component: require('@/components/Roster/index').default
    },
    {
      path: '/gm',
      name: 'gm-tools',
      component: require('@/components/Roster/index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})