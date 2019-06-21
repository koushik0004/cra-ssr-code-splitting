import React, { useEffect } from 'react';
import Loadable from 'react-loadable';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Switch, NavLink } from 'react-router-dom';

import { setMessage } from './store/appReducer';
import 'bootstrap/scss/bootstrap.scss';

// import logo from './logo.svg';
import './App.scss';


const AsyncComponent = Loadable({
    loader: () => import(/* webpackChunkName: "SomeComponent" */ './components/SomeComponent'),
    loading: () => <div>loading...</div>,
    modules: ['SomeComponent'],
});

const AsyncPageDefault = Loadable({
    loader: () => import(/* webpackChunkName: "pageDefault" */ './components/PageDefault'),
    loading: () => <div>loading page...</div>,
    modules: ['pageDefault'],
});

const AsyncPageAnother = Loadable({
    loader: () => import(/* webpackChunkName: "pageAnother" */ './components/PageAnother'),
    loading: () => <div>loading another page...</div>,
    modules: ['pageAnother'],
});

const AsyncHeader = Loadable({
    loader: () => import(/* webpackChunkName: "Header" */ './components/layout/Header'),
    loading: () => <div>loading header section...</div>,
    modules: ['Header'],
});
const AsyncLeftPanel = Loadable({
  loader: () => import(/* webpackChunkName: "LeftPanel" */ './components/layout/LeftPanel'),
  loading: () => <div>loading left-panel section...</div>,
  modules: ['LeftPanel'],
});
const AsyncMainPanel = Loadable({
  loader: () => import(/* webpackChunkName: "MainPanel" */ './components/layout/MainPanel'),
  loading: () => <div>loading main-contant section...</div>,
  modules: ['MainPanel'],
});

const App = () => {
  const message = useSelector((state) => state.app.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMessage(`This is client side rendering!`));
  }, []);

  return (
        <React.Fragment>
            <AsyncHeader />
            <main role="main">
              <div className="album py-5 bg-light">
                <div className="container">
                  <div class="row">
                    <div class="col-3" role="left panel">
                      <AsyncLeftPanel />
                    </div>
                    <div class="col-9" role="Main section">
                      <AsyncMainPanel />
                    </div>
                  </div>
                  <div class="row">
                    <div className="App-intro">
                      <h2>Part 1: Async component</h2>
                      <AsyncComponent />

                      <hr />

                      <h2>Part 2: Redux store</h2>
                      <p>
                          Redux: { message }
                      </p>

                      <hr />

                      <h2>Part 3: React router</h2>
                      <nav>
                          <NavLink to="/" exact activeClassName="active">Home</NavLink>
                          <NavLink to="/another" activeClassName="active">Another page</NavLink>
                      </nav>
                      <Switch>
                          <Route path="/" exact component={AsyncPageDefault} />
                          <Route path="/another" component={AsyncPageAnother} />
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
            </main>
        </React.Fragment>
    );
};

export default withRouter(App);
