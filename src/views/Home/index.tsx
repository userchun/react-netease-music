import React, { memo, Fragment, FC, useEffect } from 'react';
import { useHistory, useLocation, Switch } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.less';
import { RouteConfig, renderRoutes } from 'react-router-config';

const Index: FC = (props: any) => {
  console.log(props);

  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/home' || location.pathname === '/')
      history.push('/home/discovery');
  }, []);
  const { routes }: RouteConfig = props?.route;

  const currentRoute = routes?.find((v) => v.path === location.pathname);
  document.title = currentRoute?.title;

  return (
    <Fragment>
      <Header />
      <div className="main">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="content">
          <Switch>{renderRoutes(routes)}</Switch>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default memo(Index);
