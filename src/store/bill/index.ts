const SET_TOTAL_COUNT = 'bill/SET_TOTAL_COUNT' as const;
const SET_TOTAL_PAYMENT = 'bill/SET_TOTAL_PAYMENT' as const;
const SET_BILL_LOADING = 'bill/SET_BILL_LOADING' as const;

export const setTotalCount = (diff: number) => ({ type: SET_TOTAL_COUNT, payload: diff });
export const setTotalPayment = (diff: number) => ({ type: SET_TOTAL_PAYMENT, payload: diff });
export const setBillLoading = (diff: boolean) => ({ type: SET_BILL_LOADING, payload: diff });

type BillAction =
  | ReturnType<typeof setTotalCount>
  | ReturnType<typeof setTotalPayment>
  | ReturnType<typeof setBillLoading>;

type BillState = {
  totalCount: number;
  totalPayment: number;
  billLoading: boolean;
};

const initialState: BillState = {
  totalCount: 0,
  totalPayment: 0,
  billLoading: false,
};

function billReducer(state: BillState = initialState, action: BillAction) {
  switch (action.type) {
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    case SET_TOTAL_PAYMENT:
      return { ...state, totalPayment: action.payload };
    case SET_BILL_LOADING:
      return { ...state, billLoading: action.payload };
    default:
      return state;
  }
}

export default billReducer;
