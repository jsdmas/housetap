import { useSelector } from 'react-redux';

import Bill from '../components/Bill';
import { RootState } from '../store';

const BillContainer = () => {
  const { totalCount, totalPayment, billLoading } = useSelector(
    (state: RootState) => state.billReducer,
  );
  const { loading: productLoading } = useSelector((state: RootState) => state.productReducer);

  return (
    <Bill
      productLoading={productLoading}
      totalCount={totalCount}
      totalPayment={totalPayment}
      billLoading={billLoading}
    />
  );
};

export default BillContainer;
