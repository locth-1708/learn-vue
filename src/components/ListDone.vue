<template>
  <div>
    <div v-for='(item, index) in listDone' :key="item" class='listItem'>
      <p>{{item}}</p>
      <div class='buttonSection'>
        <button
          @click='transferTask("listDone", "listNew", index)'
        >Làm lại</button>
        <button v-on:click='deleteTask("listDone", index)' >Xóa</button>
      </div>
    </div>
  </div>
</template>

<script>
import stores from '../stores';
export default {
  name: 'ListDone',
  computed: {
    listDone() {
      return stores.state.listDone;
    }
  },
  methods: {
    deleteTask (listType, index) {
      stores.commit('deleteTask', {listType, index})
    },
    transferTask (currentList, nextList, index) {
      stores.commit('transferTask', {currentList, nextList, index})
    }
  }
}
</script>

<style scoped>
.listItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-left: 16px;
  margin-bottom: 2px;
  font-size: 16px;
  background: #4267b2;
  color: #fff;
}
.listItem:last-child {
  border-radius: 0 0 10px 10px;
  margin-bottom: 0;
}
.buttonSection {
  background: transparent;
}
.buttonSection > button {
  color: #4267b2;
  font-weight: bold;
  margin-right: 10px;
  background: #ffffff;
  border: none;
  padding: 5px 10px;
}
</style>
