<template>
  <div id="app">
    <AddTodo />
    <div class='navigator'>
      <router-link to="/listNew">List New ({{getListNewLength}})</router-link>
      <router-link to="/listInprogress">List Inprogress ({{getListInprogressLength}})</router-link>
      <router-link to="/listDone">List Done ({{getListDoneLength}})</router-link>
    </div>
    <div class='content'>
      <router-view />
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    AddTodo,
  },
  computed: {
    ...mapGetters([
      'getListNewLength',
      'getListInprogressLength',
      'getListDoneLength',
    ])
  }
}
</script>

<style lang="scss">
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
.navigator {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 600px;
  margin-top: 30px;
  margin-bottom: 2px;
  border-radius: 10px;
  a {
    width: calc(100% / 3 - (4px / 3));
    padding: 10px 20px;
    margin-left: 2px;
    text-decoration: none;
    font-size: 16px;
    border-radius: 10px 10px 0 0;
    color: #ffffff;
    background: #4267b2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:first-child {
      margin-left: 0;
    }
    &:hover {
      background-color: #3578e5;
    }
  }
  a.router-link-exact-active,
  a.router-link-exact-active {
    background-color: #3578e5;
  }
}
.content {
  width: 600px;
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-left: 16px;
  margin-bottom: 2px;
  font-size: 16px;
  background: #4267b2;
  color: #fff;
  &:last-child {
    border-radius: 0 0 10px 10px;
    margin-bottom: 0;
  }
}
.list-item__button {
  background: transparent;
  button {
    color: #4267b2;
    font-weight: bold;
    margin-right: 10px;
    background: #ffffff;
    border: none;
    padding: 5px 10px;
  }
}
</style>
