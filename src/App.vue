<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AddTodo />
    <div class='containerTab'>
      <router-link to="/listNew">listNew</router-link>
      <router-link to="/listInprogress">listInprogress</router-link>
      <router-link to="/listDone">listDone</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
export default {
  name: 'app',
  components: {
    AddTodo,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
