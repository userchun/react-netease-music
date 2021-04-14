import React, { memo, Fragment, FC } from 'react';

import './index.less';
interface Props {}

const Index: FC<Props> = () => {
  return (
    <Fragment>
      <div className="footer"></div>
    </Fragment>
  );
};
export default memo(Index);
