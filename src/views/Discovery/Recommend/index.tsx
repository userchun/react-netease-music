import React, { memo, Fragment, FC, useEffect, useState } from 'react';
import { getPersonalized } from '@/api';
import Loading from '@/components/Loading';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useSpring, animated } from 'react-spring';
import './index.less';
interface Props {}
const calc = (x: any, y: any) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x: any, y: any, s: any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Index: FC<Props> = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
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
                  <animated.div
                    className="img-wrap"
                    onMouseMove={({ clientX: x, clientY: y }) =>
                      set({ xys: calc(x, y) })
                    }
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{
                      transform:
                        activeImg === index ? props.xys.interpolate(trans) : '',
                    }}
                  >
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
                  </animated.div>
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
