import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* saveToList(action) {
  try {
  yield axios.post('/collections', {data: action.payload})
  // yield put({type: 'GET_LIST_TITLES'})
  } catch (error) {
    console.log(error);
  }
}
function* getListTitles() {
  try {
    const response = yield axios.get('/collections/outer')    
    yield put({type: 'SET_COLLECTION', payload: response.data})
  } catch (error) {
    console.log(error);
  }
}
function* deleteList(action) {
  try {    
    yield axios.delete(`/collections/outer/${action.payload}`) 
    yield put({type: 'GET_LIST_TITLES'})
  } catch (error) {
    console.log(error);
  } 
}
function* updateListName(action) {
  try {
  yield axios.put(`/collections/outer`, {data: action.payload})
  yield put({type: 'GET_LIST_TITLES'})  
  } catch (error) {
    console.log(error);
  }
}
function* createNewList(action) {  
  try {
  yield axios.post('/collections/outer', {newListTitle: action.payload})
  yield put({type: 'GET_LIST_TITLES'})
  } catch (error) {
    console.log(error);
  }
}
function* listSaga() {
  yield takeEvery('SAVE_TO_LIST', saveToList);
  yield takeEvery('GET_LIST_TITLES', getListTitles)
  yield takeEvery('DELETE_LIST', deleteList)
  yield takeEvery('PUT_LIST_TITLE', updateListName)
  yield takeEvery('CREATE_NEW_LIST', createNewList)
}

export default listSaga;
