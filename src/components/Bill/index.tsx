import { useNavigate } from 'react-router-dom';

import { PATH } from '../../constants/path';
import { priceConversion } from '../../utils';
import S from './style';
import { BillProps } from './type';

const Bill = ({
  productLoading,
  totalCount,
  totalPayment,
  billLoading,
  submitOrderLoading,
  deleteSelectItem,
}: BillProps) => {
  const navigate = useNavigate();

  const submitOrder = () => {
    submitOrderLoading(true);
    setTimeout(() => {
      submitOrderLoading(false);
      navigate(PATH.COMPLETE);
      deleteSelectItem();
    }, 1500);
  };

  return (
    <S.Wrapper>
      <S.Items>
        <S.Item>총 수량 : {totalCount}개</S.Item>
        <S.Item>총 가격 : {priceConversion(totalPayment)}</S.Item>
      </S.Items>
      <S.Button
        onClick={submitOrder}
        disabled={productLoading || totalCount <= 0 || billLoading}
        $ItemLoading={productLoading}
        $totalCount={totalCount}
        $billLoading={billLoading}
      >
        {billLoading ? '로딩중...' : '주문하기'}
      </S.Button>
    </S.Wrapper>
  );
};

export default Bill;
