import Vue from 'vue'
import Router from 'vue-router'

// add some comments here
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Documentation from './views/Signup.vue'
import Dashboard from './dashboard/templates/Dashboard.vue'
import Devotionals from './dashboard/templates/Devotionals.vue'
import AddDevotional from './dashboard/templates/AddDevotional.vue'
// Growth Plans
import GrowthPlans from './dashboard/templates/GrowthPlans.vue'
import AddGrowthPlan from './dashboard/templates/AddGrowthPlan.vue'
import GrowthDevotionals from './dashboard/templates/GrowthDevotionals.vue'
import AddGrowthDevotional from './dashboard/templates/AddGrowthDevotional.vue'
// Bible Promises
import BiblePromises from './dashboard/templates/BiblePromises.vue'
import AddPromiseCategory from './dashboard/templates/AddPromiseCategory.vue'
import BiblePromiseCategories from './dashboard/templates/BiblePromiseCategories.vue'
import AddBiblePromise from './dashboard/templates/AddBiblePromise.vue'
// Prayer Requests
import PrayerRequests from './dashboard/templates/PrayerRequests.vue'
// Testimonies
import Testimonies from './dashboard/templates/Testimonies.vue'
// Events
import Events from './dashboard/templates/Events.vue'
import AddEvent from './dashboard/templates/AddEvent.vue'
// Podcasts
import Podcasts from './dashboard/templates/Podcasts.vue'
import AddPodcast from './dashboard/templates/AddPodcast.vue'
// Prophecies
import Prophecies from './dashboard/templates/Prophecies.vue'
import AddProphecy from './dashboard/templates/AddProphecy.vue'
// Online Giving
import OnlineGiving from './dashboard/templates/OnlineGiving.vue'
import OnlineGivingCategories from './dashboard/templates/OnlineGivingCategories.vue'
import AddGivingCategory from './dashboard/templates/AddGivingCategory.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes : [
		{path:'/', component: Home},
		{path: '/docs', component: Documentation},
		{path: '/signup', component: Signup},
		{path: '/login', component: Login},
		{path: '/dashboard', component: Dashboard},
		// daily devotionals
		{path: '/devotionals', component: Devotionals},
		{path: '/add-devotional', component: AddDevotional},
		// growth plans
		{path: '/growth-plans', component: GrowthPlans},
		{path: '/add-plan', component: AddGrowthPlan},
		{path: '/growth-devotionals', component: GrowthDevotionals},
		{path: '/add-growth-devotional', component: AddGrowthDevotional},
		{path: '/watch', component: Dashboard},
		{path: '/store', component: Dashboard},
		// bible-promises
		{path: '/bible-promises', component: BiblePromises},
		{path: '/add-promises', component: AddBiblePromise},
		{path: '/promise-categories', component: BiblePromiseCategories},
		{path: '/add-promise-category', component: AddPromiseCategory},
		// prayer requests
		{path: '/prayer-requests', component: PrayerRequests},
		// testimonies
		{path: '/testimonies', component: Testimonies},
		// events
		{path: '/events', component: Events},
		{path: '/add-event', component: AddEvent},
		// podcasts
		{path: '/podcasts', component: Podcasts},
		{path: '/add-podcast', component: AddPodcast},
		// prophecies
		{path: '/prophecies', component: Prophecies},
		{path: '/add-prophecy', component: AddProphecy},
		// online giving
		{path: '/giving', component: OnlineGiving},
		{path: '/giving-categories', component: OnlineGivingCategories},
		{path: '/add-giving-category', component: AddGivingCategory},
		{path: '/profile', component: Dashboard},
		{path: '/settings', component: Dashboard}
	]
})

export default router 
