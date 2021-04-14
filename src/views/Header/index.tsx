import React, { memo, Fragment, FC, useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.less';
interface Props {}

const navList: { path: string; title: string }[] = [
  {
    path: '/',
    title: '发现音乐',
  },
  {
    path: '/my',
    title: '我的',
  },
  {
    path: '/friend',
    title: '朋友',
  },
  {
    path: '/store/product',
    title: '商城',
  },
  {
    path: '/musician/artist',
    title: '音乐人',
  },
  {
    path: '/download',
    title: '下载客户端',
  },
];

const Index: FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [serVal, setSerVal] = useState<string>();
  return (
    <Fragment>
      <div className="header">
        <div className="left"></div>
        <div className="right">
          <Input
            prefix={<SearchOutlined />}
            size="small"
            placeholder="搜索"
          ></Input>
        </div>
      </div>
    </Fragment>
  );
};
export default memo(Index);
