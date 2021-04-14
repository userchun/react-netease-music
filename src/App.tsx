import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter, Switch } from 'react-router-dom';
import routers from './routers';
import Loading from './components/Loading';
import './App.less';
function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Switch>{renderRoutes(routers)}</Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
