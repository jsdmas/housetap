import { useDispatch, useSelector } from 'react-redux';

import Bill from '../components/Bill';
import { RootState } from '../store';
import { setBillLoading } from '../store/bill';
import { clearSelectItem } from '../store/selectItem';

const BillContainer = () => {
  const { totalCount, totalPayment, billLoading } = useSelector(
    (state: RootState) => state.billReducer,
  );
  const { loading: productLoading } = useSelector((state: RootState) => state.productReducer);

  const dispatch = useDispatch();

  const submitOrderLoading = (loading: boolean) => {
    dispatch(setBillLoading(loading));
  };

  const deleteSelectItem = () => {
    dispatch(clearSelectItem());
  };

  return (
    <Bill
      productLoading={productLoading}
      totalCount={totalCount}
      totalPayment={totalPayment}
      billLoading={billLoading}
      submitOrderLoading={submitOrderLoading}
      deleteSelectItem={deleteSelectItem}
    />
  );
};

export default BillContainer;
