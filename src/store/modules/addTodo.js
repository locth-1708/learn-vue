/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as API from '../../service';
import { mutationConstant } from '../../constant';

const state = {};

const getters = {};

const mutations = {};

const actions = {
  [mutationConstant.ADD_NEW] ({commit}, value) {
    API.addNewTask({currentList: 'listNew', value});
    commit('updateListData', 'listNew', {root: true})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
