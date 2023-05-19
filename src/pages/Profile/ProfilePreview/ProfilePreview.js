import classNames from 'classnames/bind';
import styles from './ProfilePreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/component/Button/Button';
import { MoreIcon, ShareIcon, ShareLinkIcon } from '~/component/Icons';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function ProfilePreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('img')} alt="" src={data.avatar} />
                <div className={cx('content')}>
                    <div className={cx('name_profile')}>
                        <h2 className={cx('name')}>{`${data.first_name} ${data.last_name}`}</h2>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                    </div>
                    <h1 className={cx('nickname')}>{data.nickname}</h1>
                    <Button className={cx('button')} primary>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('infor')}>
                <div className={cx('infor_profile')}>
                    <strong className={cx('count')}>{data.followings_count}</strong>
                    <span className={cx('text')}>Following</span>
                </div>
                <div className={cx('infor_profile')}>
                    <strong className={cx('count')}>{data.followers_count}</strong>
                    <span className={cx('text')}>Followers</span>
                </div>
                <div className={cx('infor_profile')}>
                    <strong className={cx('count')}>{data.likes_count}</strong>
                    <span className={cx('text')}>Likes</span>
                </div>
            </div>
            <h2 className={cx('des')}>{data.bio}</h2>
            <span className={cx('share')}>
                <ShareLinkIcon className={cx('share-icon-link')} />
                {`beacons.${data.nickname}`}
            </span>
            <ShareIcon className={cx('share-icon')} />
            <MoreIcon className={cx('more-icon')} />
        </div>
    );
}

export default ProfilePreview;
