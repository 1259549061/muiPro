import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import mail from '@/components/mail'
import find from '@/components/find'
import my from '@/components/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
		{
			path: '/login',
			component:login
		},
		{
			path: '/home',
			component:home
		},
		{
			path: '/mail',
			component:mail
		},
		{
			path: '/find',
			component:find
		},
		{
			path: '/my',
			component:my
		}
  ]
})
