import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                // src=""
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6c1986a6414b43a2fc8fdf0fd5b2a34d~c5_100x100.jpeg?x-expires=1679601600&x-signature=OBmMytGx%2BKgs6IneiUIca9b1vg0%3D"
                alt="Duyeennn"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span> hamyduyen0203 </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Mỹ Duyên</span>
            </div>
        </div>
    );
}

export default AccountItem;
