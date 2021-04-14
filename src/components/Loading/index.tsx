import React, { memo, Fragment, FC } from 'react';
import './index.less';
interface Props {}

const Index: FC<Props> = () => {
  return (
    <Fragment>
      <div className="loading">
        <div className="breeding-rhombus-spinner">
          <div className="rhombus child-1"></div>
          <div className="rhombus child-2"></div>
          <div className="rhombus child-3"></div>
          <div className="rhombus child-4"></div>
          <div className="rhombus child-5"></div>
          <div className="rhombus child-6"></div>
          <div className="rhombus child-7"></div>
          <div className="rhombus child-8"></div>
          <div className="rhombus big"></div>
        </div>
      </div>
    </Fragment>
  );
};
export default memo(Index);
