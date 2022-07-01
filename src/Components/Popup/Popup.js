import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Button } from '../Button';
import styles from './Popup.module.scss';

const cx = classNames.bind(styles);
function Popup({ closeBtn }) {
    return (
        <div className={cx('popup-container')}>
            <div className={cx('wrapper')}>
                <span
                    onClick={() => {
                        closeBtn(false);
                    }}
                    className={cx('electro-close-icon')}
                >
                    <FontAwesomeIcon className={cx('icon-close')} icon={faClose} />
                </span>
                <div className={cx('popup-wrapper')}>
                    <div className={cx('popup-content')}>
                        <div className={cx('heading-from')}>
                            <h1 className={cx('popup-title')}>Xin chào,</h1>
                            <span className={cx('title-login')}>
                                Đăng nhập hoặc <span className={cx('title-register')}>Tạo tài khoản</span>
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
                            <div className={cx('forgot-password')}>
                                <span>Quên mật khẩu?</span>
                            </div>
                            <div className={cx('btn-login')}>
                                <Button large>Đăng nhập</Button>
                            </div>
                        </form>
                        <div className={cx('or-social')}>
                            <span className={cx('title-social')}>Hoặc tiếp tục bằng</span>
                        </div>
                        <div className={cx('btn-social')}>
                            <aside>
                                <div className={cx('login-social')}>
                                    <a href="/" className={cx('href-social')}>
                                        <img
                                            className={cx('img-social')}
                                            alt="facebook"
                                            src="https://beta.gearvn.com/wp-content/themes/gearvn-electro-child-v1/assets/images/social_login/facebook.png"
                                        />
                                    </a>
                                </div>
                            </aside>
                            <aside>
                                <div className={cx('login-social')}>
                                    <a href="/" className={cx('href-social')}>
                                        <img
                                            className={cx('img-social')}
                                            alt="google"
                                            src="https://beta.gearvn.com/wp-content/themes/gearvn-electro-child-v1/assets/images/social_login/google.png"
                                        />
                                    </a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
                <img
                    src="https://beta.gearvn.com/wp-content/themes/gearvn-electro-child-v1/assets/images/gbot-form-account.png"
                    alt="gearvn"
                />
            </div>
        </div>
    );
}

export default Popup;
