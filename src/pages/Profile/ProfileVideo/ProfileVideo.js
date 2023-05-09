import classNames from 'classnames/bind';
import styles from './ProfileVideo.module.scss';
import Image from '~/component/Image';
import { PlayIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

function ProfileVideo({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('img')} alt={''} src={data.thumb_url} />
            <video className={cx('video')} src={data.file_url} />
            <div className={cx('view')}>
                <PlayIcon className={cx('icon')} />
                <strong className={cx('count')}>999</strong>
            </div>
        </div>
    );
}

export default ProfileVideo;
