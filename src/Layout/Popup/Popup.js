import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Popup.module.scss';

const cx = classNames.bind(styles);
function PopupLogin({ closeBtn, children }) {
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
                        {children}
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

export default PopupLogin;
