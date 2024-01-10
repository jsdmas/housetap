import Layout from '../../components/Layout';
import BillContainer from '../../Container/BillContainer';
import ProductContainer from '../../Container/ProductContainer';

const Order = () => {
  return (
    <Layout header>
      <ProductContainer />
      <BillContainer />
    </Layout>
  );
};

export default Order;
