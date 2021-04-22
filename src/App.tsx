import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter, Switch, useLocation } from 'react-router-dom';
import routers from './routers';
import Loading from './components/Loading';
import { Provider } from 'react-redux';
import store from './store';
import 'amfe-flexible';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.less';
function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Provider store={store}>{renderRoutes(routers)}</Provider>
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
