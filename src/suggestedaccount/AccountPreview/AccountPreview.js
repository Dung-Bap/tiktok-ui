import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} alt="" src={data.avatar} />
                <span className={cx('btn-follow')}>
                    {' '}
                    <Button primary>Follow</Button>
                </span>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count}</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
