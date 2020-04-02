import { ShopActionsTypes } from './shop.types';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    // call is used to call function from yield
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // put is used to dispatch action from saga
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    // takeLatest is like an action listener
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
