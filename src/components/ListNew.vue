<template>
  <div>
    <div v-for='(item, index) in listNew' :key="item" class='listItem'>
      <p v-show='indexItemEdited !== index'>{{item}}</p>
      <input
        class="inputEdit"
        type="text"
        v-show='indexItemEdited === index' 
        :placeholder='item'
        v-model='item.index'
        @blur='saveEdit("listNew", $item[index], index)'
      />
      <div class='buttonSection'>
        <button 
          v-show='indexItemEdited !== index'
          @click='toggleEdit(index)'
        >
          Sửa
        </button>
        <button
          v-show='indexItemEdited === index'
          @click='toggleEdit(index), saveEdit("listNew", item, index)'
        >
          Lưu
        </button>
        <button
          @click='transferTask("listNew", "listInprogress", index)'
        >Làm</button>
        <button v-on:click='deleteTask("listNew", index)' >Xóa</button>
      </div>
    </div>
  </div>
</template>

<script>
import stores from '../stores';
export default {
  name: 'ListNew',
  data: function() {
    return {
      indexItemEdited: -1,
      item: '',
    };
  },
  computed: {
    listNew() {
      return stores.state.listNew;
    }
  },
  methods: {
    toggleEdit: function (index) {
      if(this.indexItemEdited === index) {
        return this.indexItemEdited = -1;
      }
      return this.indexItemEdited = index;
    },
    deleteTask: function (listType, index) {
      stores.commit('deleteTask', {listType, index})
    },
    saveEdit: function (listType, value, index) {
      stores.commit('saveEdit', {listType, value, index})
    },
    transferTask: function (currentList, nextList, index) {
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
.inputEdit {
  padding: 2.5px 10px;
  font-size: 16px;
  color: #4267b2;
  background: #ffffff;
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
