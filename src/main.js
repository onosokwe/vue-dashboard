import Vue from 'vue'
import App from './App.vue'
import router from './router'
import wysiwyg from "vue-wysiwyg"
import "vue-wysiwyg/dist/vueWysiwyg.css";

Vue.config.productionTip = false

Vue.use(wysiwyg, {});

// import auth data
const authData = localStorage.getItem("auth")

new Vue({
	router,
	data: {
		auth: authData ? JSON.parse(authData) : null
	},
	render: h => h(App),
}).$mount('#app')

