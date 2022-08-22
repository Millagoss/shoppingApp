import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCollectionAndDocument } from '../../utils/firebase/firebase.utils';

import { CATEGORIES_ACTION_TYPES } from './categories.types';

import {
  setCategoriesFetchFailed,
  setCategoriesFetchSuccess,
} from './categories.action';

function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCollectionAndDocument, 'categories');
    yield put(setCategoriesFetchSuccess(categoriesArray));
  } catch (error) {
    yield put(setCategoriesFetchFailed(error));
  }
}

function* onCategoriesFetch() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onCategoriesFetch)]);
}
