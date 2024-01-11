import { Product } from '../../types';

const SET_PRODUCT = 'product/SET_PRODUCT' as const;
const SET_PRODUCT_LOADING = 'product/SET_PRODUCT_LOADING' as const;

export const setProduct = (diff: Product[] | null) => ({
  type: SET_PRODUCT,
  payload: diff,
});

export const setProductLoading = (diff: boolean) => ({
  type: SET_PRODUCT_LOADING,
  payload: diff,
});

type ProductAction = ReturnType<typeof setProduct> | ReturnType<typeof setProductLoading>;

type ProductState = {
  items: Product[] | null;
  loading: true;
};

const initialState: ProductState = {
  items: null,
  loading: true,
};

function productReducer(state: ProductState = initialState, action: ProductAction) {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, items: action.payload };
    case SET_PRODUCT_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default productReducer;
