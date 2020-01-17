import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    listNew: [
      'về nhà ăn tết',
    ],
    listInprogress: [
      'làm việc',
    ],
    listDone: [
      'đi ngủ',
    ],

  },
  mutations: {
    addNew: (state, {value}) => state.listNew.push(value),
    deleteTask: (state, {listType, index}) => state[listType].splice(index, 1),
    InprogressTask: (state, {value}) => state.listInprogress.push(value),
    doneTask: (state, {value}) => state.listDone.push(value),
  }
})

export default store;
