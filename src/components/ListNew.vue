<template>
  <div>
    <div v-for='(item, index) in listNew' :key="index" class='list-item'>
      <p v-show='indexItemEdited !== index' @click='toggleEdit(index)'>{{item.value}}</p>
      <input
        class="list-item__input"
        type="text"
        v-show='indexItemEdited === index' 
        :placeholder='item.value'
        v-model='item.index'
        @keyup.enter="e => cancelEdit(e, item.id)"
        @keyup.esc="toggleEdit(-1)"
      />
      <div class='list-item__button'>
        <button
          @click='transferTask({
            currentList: "listNew",
            nextList: "listInprogress",
            id: item.id
          })'
        >Làm</button>
        <button
          @click='deleteTask({
            currentList: "listNew",
            id: item.id
          })'
        >Xóa</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { mapActions, mapState } from 'vuex'
import { mutationConstant, moduleConstant } from '../constant';
import * as API from '../service';

export default {
  name: 'ListNew',
  data: function() {
    return {
      indexItemEdited: -1,
      item: '',
    };
  },
  created() {
    this.getListData('listNew');
  },
  computed: {
    ...mapState(['listNew']),
  },
  methods: {
    ...mapActions([
      'getListData',
      'transferTask',
      'deleteTask',
    ]),
    ...mapActions({
      saveEdit: `${moduleConstant.LIST_NEW}/${mutationConstant.SAVE_EDIT}`,
    }),
    toggleEdit: function (index) {
      if(this.indexItemEdited === index) {
        return this.indexItemEdited = -1;
      }
      return this.indexItemEdited = index;
    },
    cancelEdit (e, id) {
      if(e.target.value.trim()) {
        this.saveEdit({id, value: e.target.value.trim()})
        this.indexItemEdited = -1
      }
    },
  },
}
</script>

<style scoped lang="scss">
.list-item__input {
  padding: 2.5px 10px;
  font-size: 16px;
  color: #4267b2;
  background: #ffffff;
}
</style>
