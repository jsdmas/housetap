const INCREASE_COUNT = 'bill/INCREASE_COUNT' as const;
const DECREASE_COUNT = 'bill/INCREASE_COUNT' as const;
const INCREASE_PAYMENT = 'bill/INCREASE_PAYMENT' as const;
const DECREASE_PAYMENT = 'bill/DECREASE_PAYMENT' as const;
const SET_BILL_LOADING = 'bill/SET_BILL_LOADING' as const;

export const increaseCount = (diff: number) => ({ type: INCREASE_COUNT, payload: diff });
export const decreaseCount = (diff: number) => ({ type: DECREASE_COUNT, payload: diff });
export const increasePayment = (diff: number) => ({ type: INCREASE_PAYMENT, payload: diff });
export const decreasePayment = (diff: number) => ({ type: DECREASE_PAYMENT, payload: diff });
export const setBillLoading = (diff: boolean) => ({ type: SET_BILL_LOADING, payload: diff });

type BillAction =
  | ReturnType<typeof decreaseCount>
  | ReturnType<typeof increaseCount>
  | ReturnType<typeof increasePayment>
  | ReturnType<typeof decreasePayment>
  | ReturnType<typeof setBillLoading>;

type BillState = {
  totalCount: number;
  totalPayment: number;
  billLoading: boolean;
};

const initalState: BillState = {
  totalCount: 0,
  totalPayment: 0,
  billLoading: false,
};

function billReducer(state: BillState = initalState, action: BillAction) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, totalCount: state.totalCount + action.payload };
    case DECREASE_COUNT:
      return { ...state, totalCount: state.totalCount - action.payload };
    case INCREASE_PAYMENT:
      return { ...state, totalPayment: state.totalPayment + action.payload };
    case DECREASE_PAYMENT:
      return { ...state, totalPayment: state.totalPayment - action.payload };
    case SET_BILL_LOADING:
      return { ...state, billLoading: action.payload };
    default:
      return state;
  }
}

export default billReducer;
