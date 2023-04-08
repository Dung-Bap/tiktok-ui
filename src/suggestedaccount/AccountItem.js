import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                alt=""
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6c1986a6414b43a2fc8fdf0fd5b2a34d~c5_100x100.jpeg?x-expires=1679601600&x-signature=OBmMytGx%2BKgs6IneiUIca9b1vg0%3D"
            />
            <div className={cx('account-info')}>
                <span className={cx('nick-name')}> ngovandung</span>
                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                <p className={cx('name')}>Ngo Van Dung</p>
            </div>
        </div>
    );
}

export default AccountItem;
