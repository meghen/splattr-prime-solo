import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getMovies(action) {
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    const response = yield axios.get('/api/movies');
    yield console.log('response.data', response.data.results);
    
    yield put({ type: 'GET_MOVIES', payload: response.data.results });

  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* homePageSaga() {
  yield takeLatest('FETCH_MOVIES', getMovies);
}

export default homePageSaga;
