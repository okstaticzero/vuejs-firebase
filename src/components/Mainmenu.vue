
<template>
  <div class="main-menu">
     <ul class="nav nav-pills">
      <li role="presentation" v-for="item in arrNav" v-link-active v-if="item.auth || authenticated">
        <a v-link="{ path: item.id, exact: true }">{{ item.title}}</a>
      </li>
     </ul>
      <button  v-if="authenticated" class="btn btn-default log-btn" v-on:click="logout()">Log Out</button>
      <button  v-else class="btn btn-default log-btn" v-on:click="login()">Log In</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  props: ['authenticated'],
  data () {
    return {
      arrNav: [{
        'title': 'Home',
        'id': '/',
        'auth': true
      },
      {
        'title': 'Beer List',
        'id': '/beerlist',
        'auth': false
      },
      {
        'title': 'Enter Beer',
        'id': '/enterbeer',
        'auth': false
      }],
      cur: ' '
    }
  },
  methods: {
    login() {
      window.location.href = 'auth.html'
    },
    logout() {
      console.log('out')
      firebase.auth().signOut().then(function() {
        window.location.href = '/auth.html'
      }, function(error) {
        console.log(error)
      })
    }
   },
  ready: function () {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1 {
    color: #FF0000;
  }

  .main-menu li{
    display: inline-block;
  }
  .nav-pills{
    display: inline-block;
  }
  .main-menu{
    margin-top: 20px;
  }
  .log-btn{
    display: inline-block;
    vertical-align: top;
    margin-left: 40px;
  }
  .container{
    margin-left: 20px;
  }

</style>
