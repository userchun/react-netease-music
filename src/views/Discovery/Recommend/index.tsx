import React, { memo, Fragment, FC, useEffect, useState } from 'react';
import { getPersonalized } from '../../../api';
import Loading from '../../../components/Loading';
import { PlayCircleOutlined } from '@ant-design/icons';
import './index.less';
interface Props {}

const Index: FC<Props> = () => {
  const [recomList, setRecomList] = useState([]);
  const [activeImg, setActiveImg] = useState<number>(-1);
  useEffect(() => {
    const fn = async () => {
      const { result }: any = await getPersonalized({ limit: 10 });
      setRecomList(result);
    };
    fn();
  }, []);
  return (
    <Fragment>
      {!recomList.length && <Loading />}
      <div className="recommend">
        <div className="rec-title">推荐歌单</div>
        <div className="list-wrap">
          {recomList.length &&
            recomList.map((v: any, index) => {
              return (
                <div
                  key={v.id}
                  className="playlist-card"
                  onMouseEnter={() => {
                    setActiveImg(index);
                  }}
                >
                  <div className="img-wrap">
                    <img src={v.picUrl} alt="" />
                    <div
                      title={v.copywriter}
                      className={
                        'desc-wrap name' +
                        (activeImg === index ? ' desc-wrap-show ' : '')
                      }
                    >
                      {v.copywriter}
                    </div>
                  </div>
                  <p data-v-5ee4ad8a="" className="name">
                    {v.name}
                  </p>
                  <div
                    className="play-icon"
                    style={{
                      opacity: activeImg === index ? 1 : 0,
                      color:
                        activeImg === index ? 'rgb(245, 94, 94)' : '#ffffff',
                    }}
                  >
                    <PlayCircleOutlined />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};
export default memo(Index);
