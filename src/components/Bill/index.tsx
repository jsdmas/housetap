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

  const submitOrder = async () => {
    try {
      submitOrderLoading(true);
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // 실패화면 이동시 reject 호출.
          resolve(true);
          // reject('주문 실패!');
        }, 1500);
      });

      if (result) {
        navigate(PATH.COMPLETE);
      }
    } catch (err) {
      console.error(err);
      navigate(PATH.ERROR);
    } finally {
      submitOrderLoading(false);
      deleteSelectItem();
    }
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
