<template>
  <div id="app">
    <h1>APP</h1>
    <button @click="flag =! flag">toggle flag</button>
    <hr>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Test v-if="flag"></Test>
    <hr>
    <div class="box">
    <Left></Left>
    <Right></Right>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Left from './components/Left.vue'
import Right from './components/Right.vue'
import Test from './components/test.vue'

export default {
data(){
  return {
    flag: true
  }
},
  name: 'App',
  components: {
    Left,
    Right,
    Test
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
