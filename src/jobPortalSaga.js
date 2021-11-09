import {fork,takeLatest,call,put} from 'redux-saga/effects';
import {actionTypes} from './action';
import * as jobService from './services/jobService';
function* fetchJobListing(action){
  console.log({action});
  const jobs=yield call(jobService.fetchJobs,action.payload);
  console.log({jobs})
  yield put({type:actionTypes.SET_JOBS,payload:jobs});
}
function* jobPortalSaga(){
    yield takeLatest(actionTypes.GET_JOB_LISTING,fetchJobListing);
}

function* watcherSaga(){
    yield fork(jobPortalSaga);
}
export default watcherSaga;