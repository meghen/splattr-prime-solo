import { put, takeLatest } from 'redux-saga/effects';
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
function* fetchNotes(action) {
  try {
    const response = yield axios.get('/notes', {notes: action.payload});    
    yield put({ type: 'GET_NOTES', payload: response.data.results }); 
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

function* homePageSaga() {
  yield takeLatest('FETCH_MOVIES', getMovies);
  yield takeLatest('SET_MOVIES', postNotes)
  yield takeLatest('FETCH_NOTES', fetchNotes)
}

export default homePageSaga;
