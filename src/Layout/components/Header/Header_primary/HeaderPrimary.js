import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './HeaderPrimary.module.scss';
import { Button } from '~/Components/Button';
import Search from '~/Layout/Search';
import Account from '~/Layout/Account';
import Cart from '~/Layout/Cart';

const cx = classNames.bind(styles);

function HeaderPrimary() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link to='/' className={cx('logo')}>
                    <img
                        className={cx('logo-img')}
                        src="https://gstatic.gearvn.com/2021/08/Logo-GEARVN_pc-300x70-1-1.png"
                        alt="logo"
                    />
                </Link>
                <Search />

                <Button small primary>
                    <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                    Tìm kiếm
                </Button>

                <div className={cx('group-user')}>
                    <Account />

                    <Cart />
                </div>
            </div>
        </header>
    );
}

export default HeaderPrimary;
