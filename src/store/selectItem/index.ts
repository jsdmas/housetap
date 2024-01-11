const INCREASE_SELECTITEM = 'selectItem/INCREASE_SELECTITEM' as const;
const DECREASE_SELECTITEM = 'selectItem/DECREASE_SELECTITEM' as const;

export const increaseSelectItem = (productId: string) => ({
  type: INCREASE_SELECTITEM,
  payload: productId,
});
export const decreaseSelectItem = (productId: string) => ({
  type: DECREASE_SELECTITEM,
  payload: productId,
});

type SelectItemAction =
  | ReturnType<typeof increaseSelectItem>
  | ReturnType<typeof decreaseSelectItem>;

export type SelectItemState = {
  [productId: string]: number;
};

const initialState: SelectItemState = {};

function selectItemReducer(state: SelectItemState = initialState, action: SelectItemAction) {
  switch (action.type) {
    case INCREASE_SELECTITEM:
      return { ...state, [action.payload]: Math.min(999, (state[action.payload] || 0) + 1) };
    case DECREASE_SELECTITEM:
      return { ...state, [action.payload]: Math.max(0, (state[action.payload] || 0) - 1) };
    default:
      return state;
  }
}

export default selectItemReducer;
