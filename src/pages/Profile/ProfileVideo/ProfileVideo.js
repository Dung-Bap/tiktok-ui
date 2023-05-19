import classNames from 'classnames/bind';
import styles from './ProfileVideo.module.scss';
// import Image from '~/component/Image';
import { useContext, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PlayIcon } from '~/component/Icons';
import { videoEnvironment } from '~/context/VideoContext/VideoContext';

const cx = classNames.bind(styles);
function ProfileVideo({ data, videoId, handelPlayVideo, index, play = false }) {
    const location = useLocation();
    const getProfileId = location.pathname;

    const videoContext = useContext(videoEnvironment);
    const handelVideoClick = (id) => {
        videoContext.handelGetVideoId(id);
    };
    const videoRef = useRef();
    useEffect(() => {
        play
            ? setTimeout(() => {
                  videoRef.current.play();
              }, 150)
            : videoRef.current.load();
    }, [play]);

    return (
        <Link
            to={`${getProfileId}/video/${videoId}`}
            className={cx('wrapper')}
            onMouseOver={() => {
                handelPlayVideo(index);
            }}
            onClick={() => handelVideoClick(videoId)}
        >
            {/* <Image className={cx('img')} alt={''} src={data.thumb_url} /> */}
            <video muted loop ref={videoRef} className={cx('video', { active: play })} src={data.file_url} />
            <div className={cx('view')}>
                <PlayIcon className={cx('icon')} />
                <strong className={cx('count')}>999</strong>
            </div>
        </Link>
    );
}

export default ProfileVideo;
