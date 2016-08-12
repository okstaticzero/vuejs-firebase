
<template>
  <div class="overview">
    <h2>Welcome to your beer list</h2>
    <p v-if="authenticated">You are logged in</p>
    <p v-else>
      Sign on to start
    </div>
  </p>
</template>

<script>
export default {
  props: ['authenticated'],
  data () {
    return {
      msg: 'Hello World!'
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

</style>

