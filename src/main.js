import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase'
import {fireInit} from './helpers/firebaseHelpers'
import Overview from './components/Overview.vue'
import BeerList from './components/BeerList.vue'
import EnterBeer from './components/EnterBeer.vue'
import Mainmenu from './components/Mainmenu.vue'

Vue.use(VueRouter)

fireInit(fireStatus)
var authenticated = false
// create App instance
const App = Vue.extend({
  data () {
    return {
      authenticated: authenticated
   }
  },
  template:
    '<div class="col-xs-10 col-sm-4 container">' +
      '<main-menu :authenticated="authenticated"></main-menu>' +
      '<router-view :authenticated="authenticated"></router-view>' + // <- nested outlet
    '</div>',
    components: {
      'main-menu': Mainmenu
    }
})
// create Router instance
var router = new VueRouter({linkActiveClass: 'active'})

// add your routes and their components
function setRouter() {
	router.map({
		 '/': {
	        component: Overview
	    },
	    '/enterbeer': {
	        component: EnterBeer,
	        auth: true
	    },
	    '/beerlist': {
	        component: BeerList,
	        auth: true
	    }
	})
}
// check if route requires authentication
router.beforeEach(function (transition) {
  if (transition.to.auth && !authenticated) {
     transition.redirect('/')
  } else {
    transition.next()
  }
})

function fireStatus(loggedIn, user) {
    if (loggedIn) {
      authenticated = true
    } else {
    	authenticated = false
    }
    // start app after we know login status
    setRouter()
    router.start(App, '#app')
  }
// start authentication
