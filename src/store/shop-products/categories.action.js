import { getCollectionAndDocument } from '../../utils/firebase/firebase.utils';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categories.types';

// export const setCategories = (categories) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

const setCategoriesFetchStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

const setCategoriesFetchSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

const setCategoriesFetchFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(setCategoriesFetchStart());
  try {
    const categories = await getCollectionAndDocument('categories');
    console.log(categories);
    dispatch(setCategoriesFetchSuccess(categories));
  } catch (error) {
    dispatch(setCategoriesFetchFailed(error));
  }
};
