/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

import * as API from '../service';
import { moduleConstant } from '../constant';
import addTodo from './modules/addTodo';
import listNew from './modules/listNew';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: function () {
    return {
      listNew: [],
      listInprogress: [],
      listDone: [],
    } 
  },
  mutations: {
    updateListData: async (state, typeList) => {
      state[typeList] = await API.getList(typeList);
    }
  },
  getters: {
    getListNewLength: state => {
      return state.listNew.length;
    },
    getListInprogressLength: state => {
      return state.listInprogress.length;
    },
    getListDoneLength: state => {
      return state.listDone.length;
    }
  },
  actions: {
    deleteTask: ({commit}, {currentList, id}) => {
      API.deleteTask({currentList, id});
      commit('updateListData', currentList)
    },
    transferTask: async (state, {currentList, nextList, id}) => {
      const item = await API.getValue({currentList, id});
      API.deleteTask({currentList, id});
      API.addNewTask({currentList: nextList, value: item.value});
    },
    getListData: async ({state}, typeList) => {
      state[typeList] = await API.getList(typeList);
    }
  },
  modules: {
    [moduleConstant.ADD_TODO]: addTodo,
    [moduleConstant.LIST_NEW]: listNew,
  }
})

export default store;
