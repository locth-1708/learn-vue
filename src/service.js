/* eslint-disable no-console */
import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const getAll = async (params) => {
  try {
    const result = await axios.get(`${baseURL}/${params}`);
    return result.data;
  } catch (e) {
    console.error(e)
  }
}
export const getList = async (params) => {
  try {
    const result = await axios.get(`${baseURL}/${params}`);
    return result.data;
  } catch (e) {
    console.error(e)
  }
}
export const getValue = async (params) => {
  try {
    const { currentList, id } = params;
    const result = await axios.get(`${baseURL}/${currentList}/${id}`);
    return result.data;
  } catch (e) {
    console.error(e)
  }
}
export const addNewTask = async (params) => {
  try {
    const { currentList, value } = params;
    const result = await axios.post(
      `${baseURL}/${currentList}`,
      { value: value })
    return result;
  } catch (e) {
    console.error(e)
  }
}
export const editTask = async (params) => {
  try {
    const { currentList, item } = params;
    const result = await axios.put(
      `${baseURL}/${currentList}/${item.id}`,
      { value: item.value }
    )
    return result;
  } catch (e) {
    console.error(e)
  }
}
export const deleteTask = async (params) => {
  try {
    const { currentList, id } = params;
    const result = await axios.delete(`${baseURL}/${currentList}/${id}`)
    return result;
  } catch (e) {
    console.error(e)
  }
}
