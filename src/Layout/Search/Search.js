import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/Components/Popper';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ children }) {
    const [searchResult, setSearchResult] = useState([]);
    const [inputSearch, setInputSearch] = useState('');

    const handleInput = (e) => {
        setInputSearch(e.target.value);
        setSearchResult(e.target.value);
    };

    return (
        <div>
            <Tippy
                placement="bottom"
                interactive={true}
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <ul className={cx('list-item')}>
                                {setSearchResult ? (
                                    <>
                                        <li>
                                            <Link className={cx('item')} to="/">
                                                <img
                                                    className={cx('image')}
                                                    src="https://gstatic.gearvn.com/2021/08/gearvn-16g-ddr4-2x8g-3200-corsair-dominator-platinum-rgb-01-150x150.jpg"
                                                    alt="RAM 16gb"
                                                />
                                                <span className={cx('wrapper')}>
                                                    <span className={cx('title')}>
                                                        Ram Corsair Dominator 16GB (2x8GB) RGB 3200 (CMT16GX4M2E3200C16)
                                                    </span>
                                                    <span className={cx('price')}>
                                                        4.090.000
                                                        <span className={cx('unit')}>₫</span>
                                                    </span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={cx('all-results')} to="/">
                                                <span className={cx('title-results')}>Xem tất cả các kết quả</span>
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <div className={cx('keyword')}>
                                            <span className={cx('keyword-results')}>
                                                Không tìm thấy sản phẩm nào với từ khóa này
                                            </span>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        value={inputSearch}
                        onChange={handleInput}
                        className={cx('search-input')}
                        placeholder="Bạn tìm gì..."
                    />
                    {children}
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
