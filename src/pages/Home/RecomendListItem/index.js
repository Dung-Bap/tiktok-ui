import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faFlagCheckered, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

import styles from './RecommendListItem.module.scss';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import {
    HashTagMusicIcon,
    HeartIcon,
    MessageVideoIcon,
    ShareVideoIcon,
    VolumeIcon,
    VolumeMutedIcon,
} from '~/component/Icons';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function RecomendListItem({ data }) {
    const videoRef = useRef(null);
    const [videoContainerRef, isInView] = useInView({ root: null, rootMargin: '20px', threshold: 0.7 });

    useEffect(() => {
        if (isInView) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isInView]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('recommend-list')}>
                <Image className={cx('recommend-img')} alt="" src={data.user.avatar} />
                <div className={cx('recommend-container')}>
                    <div className={cx('recommend-content')}>
                        <div className={cx('recommend-title')}>
                            <h3 className={cx('recommend-name')}>{`${data.user.first_name} ${data.user.last_name}`}</h3>
                            {data.user.tick && (
                                <FontAwesomeIcon className={cx('recommend-tick')} icon={faCheckCircle} />
                            )}
                            <h4 className={cx('recommend-nickname')}>{data.user.nickname}</h4>
                            <span className={cx('recommend-btn')}>
                                <Button small outline>
                                    Follow
                                </Button>
                            </span>
                        </div>
                        <div className={cx('recommend-description')}>
                            <span>{data.description}</span>
                        </div>
                        <p className={cx('recommend-music')}>
                            <HashTagMusicIcon />
                            {data.music}
                        </p>
                    </div>
                    <div ref={videoContainerRef} className={cx('recommend-video-wrapper')}>
                        <div className={cx('recommend-video-container')}>
                            {/* <img className={cx('recommend-video-thumbnail')} alt="" src=""></img> */}
                            <div className={cx('recommend-video-content')}>
                                <video
                                    className={cx('recommend-video')}
                                    ref={videoRef}
                                    src={data.file_url}
                                    loop
                                    muted
                                ></video>
                                <div className={cx('recommend-btn-toggle')}>
                                    <FontAwesomeIcon className={cx('recommend-btn-play')} icon={faPlay} />
                                    <FontAwesomeIcon className={cx('recommend-btn-pause')} icon={faPause} />
                                </div>
                                <div className={cx('recommend-btn-voice')}>
                                    <VolumeIcon className={cx('recommend-btn-volume')} />
                                    <VolumeMutedIcon className={cx('recommend-btn-mute')} />
                                    <input type="range" className={cx('recommend-btn-progress')} />
                                </div>
                                <div className={cx('recommend-btn-report')}>
                                    <FontAwesomeIcon className={cx('recommend-btn-icon')} icon={faFlagCheckered} />
                                    <p className={cx('recommend-btn-text')}>Report</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('recommend-btn-action')}>
                            <button className={cx('recommend-btn-like')}>
                                <HeartIcon />
                            </button>
                            <strong className={cx('recommend-btn-count')}>{data.likes_count}</strong>
                            <button className={cx('recommend-btn-message')}>
                                <MessageVideoIcon />
                            </button>
                            <strong className={cx('recommend-btn-count')}>{data.comments_count}</strong>
                            <button className={cx('recommend-btn-share')}>
                                <ShareVideoIcon />
                            </button>
                            <strong className={cx('recommend-btn-count')}>{data.shares_count}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecomendListItem;
