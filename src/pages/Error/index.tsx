import { PATH } from '../../constants/path';
import UseGoToPage from '../../hook/UseGoToPage';
import { Wrapper } from './style';

const Error = () => {
  UseGoToPage(PATH.ORDER);

  return (
    <Wrapper>
      <span>주문에 실패하였습니다.</span>
      <span>다시 시도해주세요.</span>
    </Wrapper>
  );
};

export default Error;
