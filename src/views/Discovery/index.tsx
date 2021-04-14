import React, { memo, Fragment, FC } from 'react';
import Banner from './Banners';
import Recommend from './Recommend';
import MusicMain from './MusicMain';
interface Props {}

const Index: FC<Props> = () => {
  return (
    <Fragment>
      <Banner />
      <Recommend />
      <MusicMain />
    </Fragment>
  );
};
export default memo(Index);
