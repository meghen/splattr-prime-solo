import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* saveToList(action) {
  try {
    // console.log('oofda now thats a payload der ', action.payload)
  yield axios.post('/collections', {data: action.payload})
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
    yield console.log('in update saga checking action.payload', action.payload.title, action.payload.movieId);
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
function* getInList(action) {
  try {
    yield console.log('action.paylod os ', action.payload);
    
    const response = yield axios.get(`/collections/inner/${action.payload}`)    
    yield put({type: 'SET_LIST_INNER', payload: response.data})
  } catch (error) {
    console.log(error);
  }
}
function* deleteMovie(action){
  // console.log('action.oaylaod', action.payload);
  
  try {    
    yield axios.delete(`/collections/inner/${action.payload}`) 
    yield put({type: 'GET_IN_LIST'})
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
  yield takeEvery('GET_IN_LIST', getInList)
  yield takeEvery('DELETE_MOVIE', deleteMovie)
}

export default listSaga;
