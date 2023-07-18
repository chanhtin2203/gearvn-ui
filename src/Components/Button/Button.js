import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, className, small = false, large = false, primary = false}) {

    const classes = cx('button', {
        [className]: className,
        small,
        large,
        primary
    });

    return (
        <button type="submit" className={classes}>
            <span className={cx('title')}>{children}</span>
        </button>
    );
}

export default Button;
