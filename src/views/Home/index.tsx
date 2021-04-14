import React, { memo, Fragment, FC, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './index.less';
import { RouteConfig, renderRoutes } from 'react-router-config';
interface Props {}
const Index: FC<Props> = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/home' || location.pathname === '/')
      history.push('/home/discovery');
  }, []);
  const { routes }: RouteConfig = props?.route;
  return (
    <Fragment>
      <Header />
      <div className="main">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="content">{renderRoutes(routes)}</div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default memo(Index);
