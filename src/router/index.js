import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import student from '@/components/student'
import teach from '@/components/teach'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/student',
      name: 'student',
      component: student
    }, {
      path: '/teach',
      name: 'teach',
      component: teach
    }, {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
