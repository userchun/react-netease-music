import React, { memo, Fragment, FC } from 'react';
import './index.less';
interface Props {}

const Index: FC<Props> = () => {
  return (
    <Fragment>
      <div className="fulfilling-bouncing-circle-spinner">
        <div className="circle"></div>
        <div className="orbit"></div>
      </div>
    </Fragment>
  );
};
export default memo(Index);
