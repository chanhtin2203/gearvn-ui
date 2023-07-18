import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/Components/Popper';
import styles from './Account.module.scss';
import Popup from '~/Layout/Popup/';
import { Button } from '~/Components/Button';

const cx = classNames.bind(styles);

function Account({ hideOnClick = false }) {
    const [onPopupLogin, setOnPopupLogin] = useState(false);
    const [onPopupRegister, setOnPopupRegister] = useState(false);
    const [onPopupForgot, setOnPopupForgot] = useState(false);
    const handleOnPopupLogin = () => {
        setOnPopupLogin(true);
    };

    return (
        <div>
            <Tippy
                hideOnClick={hideOnClick}
                // appendTo={document.body}
                placement="bottom"
                interactive={true}
                render={(attrs) => (
                    <div className={cx('popup-navbar')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <ul className={cx('popup-accout')}>
                                <li onClick={handleOnPopupLogin} className={cx('list-item')}>
                                    <div className={cx('login-account')}>
                                        <span className={cx('title')}>Đăng nhập</span>
                                    </div>
                                </li>
                                <li
                                    onClick={() => {
                                        setOnPopupRegister(true);
                                    }}
                                    className={cx('list-item')}
                                >
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

            {onPopupLogin && (
                <Popup closeBtn={setOnPopupLogin}>
                    <div className={cx('heading-from')}>
                        <h1 className={cx('popup-title')}>Xin chào,</h1>
                        <span className={cx('title-login')}>
                            Đăng nhập hoặc{' '}
                            <span
                                onClick={() => {
                                    setOnPopupLogin(false);
                                    setOnPopupRegister(true);
                                }}
                                className={cx('title-register')}
                            >
                                Tạo tài khoản
                            </span>
                        </span>
                    </div>
                    <form className="form-popup" autoComplete="false">
                        <div className={cx('input-popup')}>
                            <input
                                className={cx('title-input')}
                                placeholder="Nhập Email hoặc Số điện thoại"
                                name="username"
                                type="text"
                            />
                        </div>
                        <div className={cx('input-popup')}>
                            <input
                                className={cx('title-input')}
                                placeholder="Nhập Mật khẩu"
                                name="password"
                                type="password"
                            />
                        </div>
                        <div
                            onClick={() => {
                                setOnPopupLogin(false);
                                setOnPopupForgot(true);
                            }}
                            className={cx('forgot-password')}
                        >
                            <span>Quên mật khẩu?</span>
                        </div>
                        <div className={cx('btn-login')}>
                            <Button large>Đăng nhập</Button>
                        </div>
                    </form>
                    <div className={cx('or-social-sub')}>
                        <span className={cx('title-social-sub')}>Hoặc tiếp tục bằng</span>
                    </div>
                    <div className={cx('btn-social-sub')}>
                        <aside>
                            <div className={cx('login-social-sub')}>
                                <a href="/" className={cx('href-social-sub')}>
                                    <img
                                        className={cx('img-social-sub')}
                                        alt="facebook"
                                        src="https://beta.gearvn.com/wp-content/themes/gearvn-electro-child-v1/assets/images/social_login/facebook.png"
                                    />
                                </a>
                            </div>
                        </aside>
                        <aside>
                            <div className={cx('login-social-sub')}>
                                <a href="/" className={cx('href-social-sub')}>
                                    <img
                                        className={cx('img-social-sub')}
                                        alt="google"
                                        src="https://beta.gearvn.com/wp-content/themes/gearvn-electro-child-v1/assets/images/social_login/google.png"
                                    />
                                </a>
                            </div>
                        </aside>
                    </div>
                </Popup>
            )}

            {onPopupRegister && (
                <Popup closeBtn={setOnPopupRegister}>
                    <div className={cx('heading-from')}>
                        <h1 className={cx('popup-title')}>Xin chào,</h1>
                        <span
                            onClick={() => {
                                setOnPopupLogin(true);
                                setOnPopupRegister(false);
                            }}
                            className={cx('title-login-sub')}
                        >
                            Đăng nhập{' '}
                        </span>
                        <span className={cx('title-register-sub')}> hoặc Tạo tài khoản</span>
                    </div>
                    <form className="form-popup" autoComplete="false">
                        <div className={cx('input-popup')}>
                            <input
                                className={cx('title-input')}
                                placeholder="Nhập họ tên"
                                name="username"
                                type="text"
                            />
                        </div>
                        <div className={cx('input-popup')}>
                            <input
                                className={cx('title-input')}
                                placeholder="Nhập số điện thoại"
                                name="phone"
                                type="text"
                            />
                        </div>
                        <div className={cx('input-popup')}>
                            <input className={cx('title-input')} placeholder="Nhập Email" name="email" type="email" />
                        </div>
                        <div className={cx('input-popup')}>
                            <input
                                className={cx('title-input')}
                                placeholder="Nhập Mật khẩu"
                                name="password"
                                type="password"
                            />
                        </div>
                        <div className={cx('input-popup')}>
                            <input
                                className={cx('title-input')}
                                placeholder="Nhập lại Mật khẩu"
                                name="password"
                                type="password"
                            />
                        </div>
                        <div className={cx('forgot-password')}>
                            <span>Đã có mã OTP?</span>
                        </div>
                        <div className={cx('btn-login')}>
                            <Button large>Xác minh số điện thoại</Button>
                        </div>
                    </form>
                </Popup>
            )}
            {onPopupForgot && (
                <Popup closeBtn={setOnPopupForgot}>
                    <div className={cx('heading-from')}>
                        <div
                            onClick={() => {
                                setOnPopupLogin(true);
                                setOnPopupForgot(false);
                            }}
                            className={cx('back-up')}
                        >
                            Quay lại
                        </div>
                        <h1 className={cx('popup-title')}>Quên mật khẩu?</h1>
                        <span className={cx('title-forgot-password')}>
                            Vui lòng nhập thông tin tài khoản để lấy lại mật khẩu
                        </span>
                    </div>
                    <form className="form-popup" autoComplete="false">
                        <div className={cx('input-popup')}>
                            <input
                                className={cx('title-input')}
                                placeholder="Nhập Email hoặc số điện thoại"
                                name="username"
                                type="text"
                            />
                        </div>
                        <div className={cx('btn-login')}>
                            <Button large>Lấy lại mật khẩu</Button>
                        </div>
                    </form>
                </Popup>
            )}
        </div>
    );
}

export default Account;
