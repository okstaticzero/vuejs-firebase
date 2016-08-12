
<template>
  <div class="beer-list">
    <div class="">
      <h2>Your Beers:</h2>
      <ul class='beer-list'>
        <li class="beer-item" v-for="item in beerList | orderBy 'time' -1 ">
          <h4 class="beer-title">{{ item.brewery }}, {{ item.beerName }}</h4><button  class="close-btn btn btn-default btn-xs" v-on:click="deleteItem($key)">X</button>
          <div class="stars">
            <img v-for="n in item.rating" class="star-img" src="../assets/star.png" alt="">
          </div>
        </li>
      </ul>
    </div>    
  </div>
</template>

<script>
  import firebase from 'firebase'
export default {
  data () {
    return {
      beerList: [],
      user: firebase.auth().currentUser
    }
  },
  methods: {
   logout() {
      console.log('out')
      firebase.auth().signOut().then(function() {
        window.location.href = '/auth.html'
      }, function(error) {
        console.log(error)
      })
    },
    deleteItem(key) {
      console.log('delete: ' + key)
      var user = firebase.auth().currentUser
      var adaRef = firebase.database().ref('users/' + user.uid + '/' + key)
        adaRef.remove()
          .then(function() {
            console.log('Remove succeeded.')
          })
          .catch(function(error) {
            console.log('Remove failed: ' + error.message)
          })
    }
   },
  ready: function () {
    var user = firebase.auth().currentUser
    var _this = this
    firebase.database().ref('users/' + user.uid).on('value', function(snapshot) {
      _this.beerList = snapshot.val()
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #FF0000;
}
.close-btn{
  display: inline-block;
  margin-left: 10px;
}
.beer-title{
  display: inline-block;
}
.star-img{
  width:20px;
}
.beer-item{
  border-bottom: 1px dotted #999;
  padding-bottom: 10px;
}
.beer-list{
  list-style: none;
  padding-left: 0;
}

</style>

