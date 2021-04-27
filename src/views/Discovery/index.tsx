import React, { memo, Fragment, FC, lazy, Suspense } from 'react';
import Loading from '@/components/Loading';

const Banner = lazy(() => import('./Banners'));
const Recommend = lazy(() => import('./Recommend'));
const MusicMain = lazy(() => import('./MusicMain'));
const Mv = lazy(() => import('./Mv'));

interface Props {}

const Index: FC<Props> = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <Banner />
        <Recommend />
        <MusicMain />
        <Mv />
      </Suspense>
    </Fragment>
  );
};
export default memo(Index);
