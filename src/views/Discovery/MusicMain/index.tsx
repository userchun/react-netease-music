import React, {
  memo,
  Fragment,
  FC,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { getNewSong } from '@/api';
import Loading from '@/components/Loading';
import { PlayCircleOutlined } from '@ant-design/icons';
import './index.less';
interface Props {}

const Index: FC<Props> = () => {
  const [songs, setSongs] = useState([]);

  const { playMusic } = useMemo(() => {
    return {
      playMusic: (song: any): void => {
        console.log(song);
      },
    };
  }, []);

  useEffect(() => {
    const fn = async () => {
      const { result }: any = await getNewSong({});
      setSongs(result);
    };
    fn();
  }, []);
  return (
    <Fragment>
      {!songs.length && <Loading />}
      <div className="music">
        <div className="music-title">最新音乐</div>
        <div className="m-list-wrap">
          {songs.map((v: any, index: number) => {
            return (
              <div
                key={v.id}
                className="m-song-card"
                onClick={() => {
                  playMusic(v);
                }}
              >
                <div className="m-order-wrap">
                  <div className="order">{index + 1}</div>
                </div>
                <div className="m-img-wrap">
                  <img src={v.picUrl}></img>
                  <div className="m-play-icon">
                    <PlayCircleOutlined />
                  </div>
                </div>
                <div className="m-song-content">
                  <div className="m-song-name">{v.name}</div>
                  <div className="m-singer">{v.song.artists[0].name}</div>
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
