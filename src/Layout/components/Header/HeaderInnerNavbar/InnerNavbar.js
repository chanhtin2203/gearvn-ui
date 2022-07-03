import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiCoinsLine } from 'react-icons/ri';
import { FiTruck } from 'react-icons/fi';
import { IoPricetagsOutline } from 'react-icons/io5';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './InnerNavbar.module.scss';

const cx = classNames.bind(styles);

function HeaderInnerNavbar({ children, onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('category-products')}>
                <div onClick={onClick} className={cx('category-item')}>
                    <AiOutlineMenu className={cx('category-icon')} />
                    <span className={cx('category-title')}>Danh mục sản phẩm</span>
                    {children}
                </div>
                <div className={cx('nav-primary')}>
                    <ul className={cx('nav-list')}>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-link')} to="/">
                                <MdPayment className={cx('nav-icon')} />
                                <span className={cx('nav-title')}>Hướng dẫn thanh toán</span>
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-link')} to="/">
                                <RiCoinsLine className={cx('nav-icon')} />
                                <span className={cx('nav-title')}>Hướng dẫn trả góp</span>
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-link')} to="/">
                                <FiTruck className={cx('nav-icon')} />
                                <span className={cx('nav-title')}>Chính sách giao hàng</span>
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-link')} to="/">
                                <IoShieldCheckmarkOutline className={cx('nav-icon')} />
                                <span className={cx('nav-title')}>Chính sách bảo hành</span>
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-link')} to="/">
                                <IoPricetagsOutline className={cx('nav-icon')} />
                                <span className={cx('nav-title')}>Tổng hợp khuyến mãi</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderInnerNavbar;
