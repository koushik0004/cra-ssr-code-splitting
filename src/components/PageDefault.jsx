import React from 'react';
import Loadable from 'react-loadable';
// import CartCounterList from './CartCounter';
const CartCounterList = Loadable({
  loader: () => import(/* webpackChunkName: "CartCounterList" */ './CartCounter'),
  loading: () => <div>loading...</div>,
  modules: ['CartCounter'],
});

export default () => (
    <React.Fragment>
      <div>This is for the main page.</div>
      <CartCounterList />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <CartCounterList />
      </Suspense> 
      Suspense and lazy is not available in react ssr
      */}
    </React.Fragment>
);
