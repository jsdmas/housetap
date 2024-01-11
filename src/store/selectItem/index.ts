const INCREASE_SELECTITEM = 'selectItem/INCREASE_SELECTITEM' as const;
const DECREASE_SELECTITEM = 'selectItem/DECREASE_SELECTITEM' as const;
const CLEAR_SELECTITEM = 'selectItem/CLEAR_SELECTITEM' as const;

export const increaseSelectItem = (productId: string, productPrice: number) => ({
  type: INCREASE_SELECTITEM,
  payload: { productId, productPrice },
});
export const decreaseSelectItem = (productId: string) => ({
  type: DECREASE_SELECTITEM,
  payload: productId,
});
export const clearSelectItem = () => ({ type: CLEAR_SELECTITEM });

type SelectItemAction =
  | ReturnType<typeof increaseSelectItem>
  | ReturnType<typeof decreaseSelectItem>
  | ReturnType<typeof clearSelectItem>;

export type SelectItemState = {
  [productId: string]: { count: number; price: number };
};

const initialState: SelectItemState = {};

function selectItemReducer(state: SelectItemState = initialState, action: SelectItemAction) {
  switch (action.type) {
    case INCREASE_SELECTITEM:
      return {
        ...state,
        [action.payload.productId]: {
          count: Math.min(999, (state[action.payload.productId]?.count || 0) + 1),
          price: action.payload.productPrice,
        },
      };
    case DECREASE_SELECTITEM:
      return {
        ...state,
        [action.payload]: {
          count: Math.max(0, (state[action.payload]?.count || 0) - 1),
          price: state[action.payload]?.price,
        },
      };
    case CLEAR_SELECTITEM:
      return {};
    default:
      return state;
  }
}

export default selectItemReducer;
