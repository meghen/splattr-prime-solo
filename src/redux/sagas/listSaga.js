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

function* listSaga() {
  yield takeEvery('SET_LIST', setList);
  yield takeEvery('GET_LIST_TITLES', getListTitles)
}

export default listSaga;
