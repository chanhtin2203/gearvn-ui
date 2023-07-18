import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import categories from '~/assets/data/category';

import styles from './Sidebar.module.scss';
import { IconContext } from 'react-icons/lib';

const cx = classNames.bind(styles);

function Sidebar({ hide, className }) {
    const classes = cx('wrapper-sidebar', {
        [className]: className,
        hide,
    });

    return (
        <div className={classes}>
            <div className={cx('wrapper-menu')}>
                <ul className={cx('sidebar-list')}>
                    {categories.map((item) => (
                        <li key={item.id} className={cx('sidebar-item')}>
                            <Link to={item.path} className={cx('sidebar-link', item.border)}>
                                <IconContext.Provider
                                    value={{
                                        style: {
                                            color: '#aeaeae',
                                            width: '20px',
                                            height: '20px',
                                            marginRight: '5px',
                                            display: 'inline-block',
                                        },
                                    }}
                                >
                                    {item.icon}
                                </IconContext.Provider>
                                <span className={cx('sidebar-title')}>{item.title}</span>
                                <div className={cx('sidebar-icon')}>
                                    <MdKeyboardArrowRight className={cx('sidebar-arrow')} />
                                </div>
                            </Link>
                            <div className={cx('menu-container-wrapper')}>
                                <ul className={cx('menu-list')}>
                                    {item.sub_menu_item?.map((sub) => (
                                        <li key={sub.id} className={cx('menu-item')}>
                                            <div className={cx('menu-item-wrapper')}>
                                                <ul className={cx('menu-list-wrapper')}>
                                                    <div className={cx('menu-title-wrapper')}>
                                                        <span className={cx('menu-title')}>{sub.title}</span>
                                                    </div>
                                                    {sub.sub_menu.map((sub_menu) => (
                                                        <li key={sub_menu.id} className={cx('menu-list-item')}>
                                                            <Link to={sub_menu.path} className={cx('menu-list-link')}>
                                                                {sub_menu.name_product}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className={cx('img-container')}>
                                    <Link to="/">
                                        <img className={cx('img-menu')} src={item.image} alt={item.title} />
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
