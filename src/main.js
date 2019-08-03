// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import 'element-ui/lib/theme-chalk/index.css';
import { Row, Col, Breadcrumb, BreadcrumbItem, Message, Loading, Pagination, Carousel, CarouselItem } from 'element-ui'
Vue.use(Row)
Vue.use(Col)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Loading)
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
