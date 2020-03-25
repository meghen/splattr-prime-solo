import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* setList(action) {
  try {
  yield axios.post('/collections', {data: action.payload})
  // yield put({type: 'GET_LIST_TITLES'})
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}
function* getListTitles() {
  try {
    const response = yield axios.get('/collections/outer')    
    yield put({type: 'SET_COLLECTION', payload: response.data})
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}
function* deleteList(action) {
  try {
  yield axios.delete(`/collections/${action.payload}`) 
  } catch (error) {
    console.log('Error with user logout:', error);
  } 
}
function* updateListName(action) {
  try {
  yield axios.put(`/collections/${action.payload}`)  
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}
function* createNewList(action) {  
  try {
  yield axios.post('/collections/outer', {newListTitle: action.payload})
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}
function* listSaga() {
  yield takeEvery('SET_LIST', setList);
  yield takeEvery('GET_LIST_TITLES', getListTitles)
  yield takeEvery('DELETE_LIST', deleteList)
  yield takeEvery('PUT_LIST_TITLE', updateListName)
  yield takeEvery('CREATE_NEW_LIST', createNewList)
}

export default listSaga;
