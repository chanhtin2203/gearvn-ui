import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import 'swiper/css';
import 'swiper/css/autoplay';
import thumbnails from '~/assets/data/thumbnail';
import Topbar from './Topbar/Header';
import HeaderPrimary from '~/Layout/components/Header/Header_primary';
import HeaderInnerNavbar from './HeaderInnerNavbar';
import Sidebar from '../Sidebar';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [onCategory, setOnCategory] = useState(true);

    const handleClick = () => {
        setOnCategory(true);
    };

    return (
        <div>
            <div className={cx('thumnail-wrapper')}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {thumbnails.map((thumbnail, index) => (
                        <SwiperSlide key={index}>
                            <Link
                                style={{
                                    backgroundColor: thumbnail.color,
                                }}
                                className={cx('thumbnail')}
                                to={thumbnail.path}
                            >
                                <img src={thumbnail.img} alt={thumbnail.alt} className={cx('img-thumbnail')} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Topbar />
            <div className={cx('header-wrapper')}>
                <HeaderPrimary />
                <HeaderInnerNavbar onClick={handleClick}>{onCategory && <Sidebar />}</HeaderInnerNavbar>
            </div>
        </div>
    );
}

export default Header;
