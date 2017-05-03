
<template>
  <div class="enter-beer">
    <div class="">
    <h2>Enter a beer:</h2>

      <input class="form-control" type="text" v-model="brewery" placeholder="Brewery"><br/>
    <input class="form-control" type="text" v-model="beerName" placeholder="beerName"><br/>
    <h4 class="star-title">Rating:</h4>
    <div class="stars">
    <img class="star-img" :src="imagePath1" v-on:click="rate(0)" alt="">
    <img class="star-img" :src="imagePath2" v-on:click="rate(1)" alt="">
    <img class="star-img" :src="imagePath3" v-on:click="rate(2)" alt="">
    <img class="star-img" :src="imagePath4" v-on:click="rate(3)" alt="">
    <img class="star-img" :src="imagePath5" v-on:click="rate(4)" alt="">
    </div><br/>
    <button  class="btn btn-default submit-btn" v-on:click="submit()">Submit</button>
     </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  props: ['logstatus'],
  data () {
    return {
      stars: ['star_off', 'star_off', 'star_off', 'star_off', 'star_off'],
      brewery: 'Brewery',
      beerName: 'Beer Name',
      rating: 0
    }
  },
  computed: {
    imagePath1: function () {
      return require('../assets/' + this.stars[0] + '.png')
    },
    imagePath2: function () {
      return require('../assets/' + this.stars[1] + '.png')
    },
    imagePath3: function () {
      return require('../assets/' + this.stars[2] + '.png')
    },
    imagePath4: function () {
      return require('../assets/' + this.stars[3] + '.png')
    },
    imagePath5: function () {
      return require('../assets/' + this.stars[4] + '.png')
    }
  },
  methods: {
    submit() {
      console.log(this.brewery)
      var user = firebase.auth().currentUser
      var d = Date.now()
      firebase.database().ref('users/' + user.uid).push({
        brewery: this.brewery,
        beerName: this.beerName,
        rating: this.rating,
        time: d
      })
      this.$route.router.go({path: '/beerlist'})
    },
    rate(index){
      this.rating = index + 1
      this.startTest = 'star'
      for (var i = 0; i < 5; i++) {
        if (index < i){
          this.stars.$set(i, 'star_off')
        } else {
          this.stars.$set(i, 'star')
        }
      }
    }
   },
  ready: function () {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #FF0000;
}
.star-img{
  cursor: pointer;
}
.stars{
  display: inline-block;
}
.star-title{
  display: inline-block;
}
.submit-btn{
  margin-top: 20px;
}

</style>

