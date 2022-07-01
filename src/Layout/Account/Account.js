import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/Components/Popper';
import styles from './Account.module.scss';
import Popup from '~/Components/Popup';

const cx = classNames.bind(styles);

function Account() {
    const [onPopup, setOnPopup] = useState(false);
    const handleAddClass = () => {
        setOnPopup(true);
    };

    return (
        <div>
            <Tippy
                visible
                // appendTo={document.body}
                delay={[0, 300]}
                placement="bottom"
                interactive={true}
                render={(attrs) => (
                    <div className={cx('popup-navbar')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <ul className={cx('popup-accout')}>
                                <li onClick={handleAddClass} className={cx('list-item')}>
                                    <div className={cx('login-account')}>
                                        <span className={cx('title')}>Đăng nhập</span>
                                    </div>
                                </li>
                                <li className={cx('list-item')}>
                                    <div className={cx('login-account')}>
                                        <span className={cx('title')}>Đăng ký</span>
                                    </div>
                                </li>
                                <li className={cx('list-item')}>
                                    <div className={cx('login-fb')}>
                                        <img
                                            src="https://beta.gearvn.com/wp-content/themes/gearvn-electro-child-v1/assets/images/facebook.png"
                                            className={cx('img-social')}
                                            alt="Facebook"
                                        />
                                        <div className={cx('title-social')}>
                                            <strong>Đăng nhập bằng Facebook</strong>
                                        </div>
                                    </div>
                                </li>
                                <li className={cx('list-item')}>
                                    <div className={cx('login-google')}>
                                        <img
                                            src="https://beta.gearvn.com/wp-content/themes/gearvn-electro-child-v1/assets/images/google.png"
                                            className={cx('img-social')}
                                            alt="Facebook"
                                        />
                                        <div className={cx('title-social')}>
                                            <strong>Đăng nhập bằng Google</strong>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </PopperWrapper>
                    </div>
                )}
            >
                <aside className={cx('user-account')}>
                    <FontAwesomeIcon className={cx('icon-account')} icon={faUserCircle} />
                    <div className={cx('wrapper')}>
                        <span className={cx('login-logout')}>Đăng nhập / Đăng ký</span>
                        <br />
                        <span className={cx('account')}>
                            Tài khoản
                            <FontAwesomeIcon className={cx('icon-arrow-down')} icon={faSortDown} />
                        </span>
                    </div>
                </aside>
            </Tippy>

            {onPopup && <Popup closeBtn={setOnPopup} />}
        </div>
    );
}

export default Account;
