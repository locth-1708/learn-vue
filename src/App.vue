<template>
  <div id="app">
    <AddTodo />
    <div class='containerTab'>
      <router-link to="/listNew">List New</router-link>
      <router-link to="/listInprogress">List Inprogress</router-link>
      <router-link to="/listDone">List Done</router-link>
    </div>
    <div class='containerContent'>
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
p, ul, li, a {
  margin: 0;
  padding: 0;
}
button, a {
  cursor: pointer;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.containerTab {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  margin-top: 30px;
  margin-bottom: 2px;
  border-radius: 10px;
}
.containerTab > a {
  width: calc(100% / 3 - (4px / 3));
  padding: 10px 20px;
  margin-left: 2px;
  text-decoration: none;
  font-size: 16px;
  border-radius: 10px 10px 0 0;
  color: #ffffff;
  background: #4267b2;
}
.containerTab > a:first-child {
  margin-left: 0;
}
.containerTab a.router-link-active,
.containerTab a.router-link-exact-active,
.containerTab a:hover {
  background-color: #3578e5;
}
.containerContent {
  width: 500px;
}
</style>
