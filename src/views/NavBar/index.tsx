import React, { memo, Fragment, FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import {
  PlaySquareOutlined,
  FileDoneOutlined,
  CustomerServiceOutlined,
  AntDesignOutlined,
} from '@ant-design/icons';

import './index.less';

interface Props {}
type NavBarList = {
  path: string;
  icon: ReactNode;
  title: string;
}[];
const navBarList: NavBarList = [
  {
    path: '/home/discovery',
    icon: <AntDesignOutlined />,
    title: '发现音乐',
  },
  {
    path: '/home/playlists',
    icon: <FileDoneOutlined />,
    title: '推荐歌单',
  },
  {
    path: '/home/songs',
    icon: <CustomerServiceOutlined />,
    title: '最新音乐',
  },
  {
    path: '/home/mvs',
    icon: <PlaySquareOutlined />,
    title: '最新MV',
  },
];
const Index: FC<Props> = () => {
  return (
    <Fragment>
      {navBarList.map((item) => {
        return (
          <NavLink to={item.path} key={item.path}>
            <div className="item">
              {item.icon}
              <span style={{ paddingLeft: 10 }}> {item.title}</span>
            </div>
          </NavLink>
        );
      })}
    </Fragment>
  );
};
export default memo(Index);
