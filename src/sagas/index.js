import { call, put, fork} from "redux-saga/effects";
import { takeLatest, takeEvery } from "redux-saga";
import axios from 'axios';

function* fetchBooks(){
  const response = yield call(axios.get,'http://localhost:8080/mock-data/products.json') 
  console.log('response',response);
  yield put({type: 'LOAD_SUCCESS', response})
}

function* watchLoadBooks(){
  console.log("watchLoadBooks");
  yield takeEvery('LAOD_PRODUCTS',fetchBooks)
}
// main saga generators
export function* sagas() {
  console.log("root saga");
  yield [ 
    fork(takeEvery,'LAOD_PRODUCTS', fetchBooks) 
  ]
}
