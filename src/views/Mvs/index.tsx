import React, { memo, Fragment, FC } from 'react';
import { Button } from 'antd';
interface Props {}

const Index: FC<Props> = () => {
  return (
    <Fragment>
      <Button>22222</Button>
    </Fragment>
  );
};
export default memo(Index);
