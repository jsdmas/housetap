import { ReactComponent as CheckFilled } from '../../assets/CheckFilled.svg';
import Layout from '../../components/Layout';
import { PATH } from '../../constants/path';
import UseGoToPage from '../../hook/UseGoToPage';
import { Wrapper } from './style';

const Complete = () => {
  UseGoToPage(PATH.ORDER);

  return (
    <Layout>
      <Wrapper>
        <CheckFilled />
        <span>주문이 완료되었습니다.</span>
      </Wrapper>
    </Layout>
  );
};

export default Complete;
