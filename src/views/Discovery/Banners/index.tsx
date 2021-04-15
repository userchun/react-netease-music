import React, {
  memo,
  Fragment,
  FC,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { getBanner } from '@/api';
import Slider from 'react-slick';

import './index.less';

interface Props {}
const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 1500,
  autoplay: true,
  dots: true,
  autoplaySpeed: 1000,
};
const Index: FC<Props> = () => {
  const [banners, setBanners] = useState([]);
  const afterChange = useCallback(() => {}, []);
  useEffect(() => {
    const getBannerFn = async () => {
      const { banners }: any = await getBanner({ type: 0 });
      setBanners(banners);
    };
    getBannerFn();
  }, []);

  return (
    <Fragment>
      <div className="slider">
        <Slider {...settings}>
          {banners.length &&
            banners.map((item: any) => {
              return (
                <div className="item-banner" key={item.imageUrl}>
                  <img src={item.imageUrl} alt="" />
                </div>
              );
            })}
        </Slider>
      </div>
    </Fragment>
  );
};
export default memo(Index);
