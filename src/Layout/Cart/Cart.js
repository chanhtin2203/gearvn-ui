import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <Link to='/cart-products' className={cx('cart-shopping')}>
            <div className={cx('count-number')}>0</div>
            <FontAwesomeIcon className={cx('cart-shopping-icon')} icon={faShopify} />
            <span className={cx('title')}>Giỏ hàng</span>
        </Link>
    );
}

export default Cart;
