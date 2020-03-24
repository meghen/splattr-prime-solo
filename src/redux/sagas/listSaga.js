import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* setList(action) {
  yield axios.post('/collections', {data: action.payload})
  // yield put({type: 'GET_LIST_TITLES'})
}
function* getListTitles() {
  const response = yield axios.get('/collections/outer')    
  yield put({type: 'SET_COLLECTION', payload: response.data})
}
function* deleteList(action) {
  yield axios.delete(`/collections/${action.payload}`)  
}
function* updateListName(action) {
  yield axios.put(`/collections/${action.payload}`)  
}

function* listSaga() {
  yield takeEvery('SET_LIST', setList);
  yield takeEvery('GET_LIST_TITLES', getListTitles)
  yield takeEvery('DELETE_LIST', deleteList)
  yield takeEvery ('PUT_LIST_TITLE', updateListName)
}

export default listSaga;
