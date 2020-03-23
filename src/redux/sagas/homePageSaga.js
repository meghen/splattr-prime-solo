import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getMovies(action) {
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    const response = yield axios.get('/api/movies');    
    yield put({ type: 'GET_MOVIES', payload: response.data.results });

  } catch (error) {
    console.log('Error with user logout:', error);
  }
}
function* postNotes(action) {
  try {
    yield axios.post('/notes', {notes: action.payload});
    yield put({type: 'FETCH_NOTES'})
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}
function* fetchNotes(action) {
  try {
    yield console.log('in fetchNotes', action.payload);
    
    const response = yield axios.get(`/notes/${action.payload}`); 
    yield console.log('after get we have ', response.data);
       
    yield put({ type: 'GET_NOTES', payload: response.data }); 
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}
function* setList(action) {
  yield console.log('hey fam we made it to SetList SAGA ', action.payload);
  yield axios.post('/collections', {data: action.payload})
}
function* findMovies(action) {
  try {    
    const response = yield axios.get(`/api/movies/search/${action.payload}`);    
    yield put({ type: 'GET_SEARCH_RESULTS', payload: response.data.results });
  } catch (error) {
    console.log('Error with user logout:', error);
  }
}
function* homePageSaga() {
  yield takeEvery('FETCH_MOVIES', getMovies);
  yield takeEvery('SET_MOVIES', postNotes);
  yield takeEvery('FETCH_NOTES', fetchNotes);
  yield takeEvery('SET_LIST', setList);
  yield takeEvery('SEARCH_MOVIES', findMovies)
}

export default homePageSaga;
