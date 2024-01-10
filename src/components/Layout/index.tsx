import Header from '../Header';
import { Wrapper } from './style';
import { layout } from './type';

const Layout = ({ header = false, children }: layout) => {
  return (
    <Wrapper>
      {header ? <Header /> : null}
      {children}
    </Wrapper>
  );
};

export default Layout;
