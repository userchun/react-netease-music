import React, { memo, Fragment, FC } from 'react';
import './index.less';
interface Props {}

const Index: FC<Props> = () => {
  return (
    <Fragment>
      <div className="mv-title">推荐MV</div>
      <div className="mv-list-wrap">
        <div className="mv-list-item"></div>
      </div>
    </Fragment>
  );
};
export default memo(Index);
