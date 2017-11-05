import Check from './../pages/check.vue'
import Success from './../pages/success.vue'
import Fail from './../pages/fail.vue'

export default [
	{
		path: '/',
		name: 'check',
		component: Check
	},
	{
		path: '/success',
		name: 'success',
		component: Success
	},
	{
		path: '/fail',
		name: 'fail',
		component: Fail
	},
]
