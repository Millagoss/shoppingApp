import { call, all } from 'redux-saga/effects';

import { categoriesSaga } from './shop-products/categories.saga';

import { userSaga } from './user/user.saga';

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
