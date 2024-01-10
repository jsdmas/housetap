import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Spinner from './components/Spinner';
import { PATH } from './constants/path';

const Home = lazy(() => import('./page/Home'));
const Order = lazy(() => import('./page/Order'));
const Complete = lazy(() => import('./page/Complete'));
const Error = lazy(() => import('./page/Error'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.ORDER} element={<Order />} />
          <Route path={PATH.COMPLETE} element={<Complete />} />
          <Route path={PATH.ERROR} element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
