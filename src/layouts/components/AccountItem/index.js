import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ data, handelHideOnSearhResult }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')} onClick={handelHideOnSearhResult}>
            <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span> {data.nickname} </span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
