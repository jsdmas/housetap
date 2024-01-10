import { ReactComponent as Logo } from '../../assets/logo-black.svg';
import Layout from '../../components/Layout';
import { PATH } from '../../constants/path';
import { StyleComponents as s } from './style';

const Home = () => {
  return (
    <Layout>
      <s.Wrapper>
        <Logo />
        <s.StyledLink to={PATH.ORDER}>주문하러 가기</s.StyledLink>
      </s.Wrapper>
    </Layout>
  );
};

export default Home;
