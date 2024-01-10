import { ReactComponent as Logo } from '../../assets/logo-black.svg';
import Layout from '../../components/Layout';
import { PATH } from '../../constants/path';
import S from './style';

const Home = () => {
  return (
    <Layout>
      <S.Wrapper>
        <Logo />
        <S.StyledLink to={PATH.ORDER}>주문하러 가기</S.StyledLink>
      </S.Wrapper>
    </Layout>
  );
};

export default Home;
