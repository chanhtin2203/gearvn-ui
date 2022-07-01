import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Topbar.module.scss';

const cx = classNames.bind(styles);

const TOP_BAR = [
    {
        title: 'Tư vấn mua hàng:',
        number: '1800 6975',
        to: 'tel: 123456789',
    },
    {
        title: 'CSKH:',
        number: '1800 6173',
        to: 'tel: 123456789',
    },
    {
        title: 'Tin công nghệ',
        to: '/tin-cong-nghe',
    },
    {
        title: 'Tuyển dụng',
        to: '/tuyen-dung',
    },
];

function Topbar() {
    return (
        <div className={cx('top-bar')}>
            <div className={cx('container')}>
                <ul className={cx('item')}>
                    {TOP_BAR.map((item, index) => (
                        <li key={index} className={cx('list')}>
                            <Link to={item.to} className={cx('list-name')}>
                                {item.title}
                                <span>
                                    <strong>{item.number}</strong>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Topbar;
