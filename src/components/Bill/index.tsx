import { priceConversion } from '../../utils';
import S from './style';
import { BillProps } from './type';

const Bill = ({ productLoading, totalCount, totalPayment, billLoading }: BillProps) => {
  return (
    <S.Wrapper>
      <S.Items>
        <S.Item>총 수량 : {totalCount}개</S.Item>
        <S.Item>총 가격 : {priceConversion(totalPayment)}</S.Item>
      </S.Items>
      <S.Button disabled={productLoading} $ItemLoading={productLoading}>
        주문하기
      </S.Button>
    </S.Wrapper>
  );
};

export default Bill;
