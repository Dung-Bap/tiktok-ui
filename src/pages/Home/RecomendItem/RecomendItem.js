import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faFlagCheckered, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { videoEnvironment } from '~/context/VideoContext/VideoContext';

import styles from './RecomendItem.module.scss';
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
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function RecomendItem({ data, videoId }) {
    const contextVideo = useContext(videoEnvironment);

    const videoRef = useRef(null);
    const [isPlaying, setIsplaying] = useState(false);
    const [isVolumed, setIsvolumed] = useState(false);
    const [videoContainerRef, isInView] = useInView({ root: null, rootMargin: '20px', threshold: 0.7 });

    const handelClickVideo = () => {
        contextVideo.handelGetVideoId(videoId);
    };

    const handelPlaying = () => {
        if (isPlaying) {
            setIsplaying(false);
            videoRef.current.play();
        } else {
            setIsplaying(true);
            videoRef.current.pause();
        }
    };

    const handelVolumed = () => {
        if (isVolumed) {
            setIsvolumed(false);
        } else {
            setIsvolumed(true);
        }
    };

    const handelVolumeProgress = (_value) => {
        const _volume = _value / 100;
        videoRef.current.volume = _volume;
    };

    useEffect(() => {
        if (isInView) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isInView]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                <Link to={`/@${data.user.nickname}`}>
                    {' '}
                    <Image className={cx('img')} alt="" src={data.user.avatar} />
                </Link>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            <Link to={`/@${data.user.nickname}`}>
                                <h3 className={cx('name')}>{`${data.user.first_name} ${data.user.last_name}`}</h3>
                            </Link>
                            {data.user.tick && <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />}
                            <Link to={`/@${data.user.nickname}`}>
                                {' '}
                                <h4 className={cx('nickname')}>{data.user.nickname}</h4>
                            </Link>
                            <span className={cx('btn')}>
                                <Button small outline>
                                    Follow
                                </Button>
                            </span>
                        </div>
                        <div className={cx('description')}>
                            <span>{data.description}</span>
                        </div>
                        <p className={cx('music')}>
                            <HashTagMusicIcon />
                            {data.music}
                        </p>
                    </div>
                    <div ref={videoContainerRef} className={cx('video_wrapper')}>
                        <div className={cx('video_container')}>
                            {/* <img className={cx('video_thumbnail')} alt="" src=""></img> */}
                            <div className={cx('video_content')}>
                                <Link to={`/@${data.user.nickname}/video/${data.id}`}>
                                    <video
                                        className={cx('video')}
                                        ref={videoRef}
                                        src={data.file_url}
                                        loop
                                        onClick={handelClickVideo}
                                    ></video>
                                </Link>
                                <div className={cx('btn_toggle')} onClick={handelPlaying}>
                                    {isPlaying ? (
                                        <FontAwesomeIcon className={cx('btn_play')} icon={faPlay} />
                                    ) : (
                                        <FontAwesomeIcon className={cx('btn_pause')} icon={faPause} />
                                    )}
                                </div>
                                <div className={cx('btn_voice')} onClick={handelVolumed}>
                                    {isVolumed ? (
                                        <VolumeIcon className={cx('btn_volume')} />
                                    ) : (
                                        <VolumeMutedIcon className={cx('btn_mute')} />
                                    )}
                                </div>
                                <div className={cx('volume_control')}>
                                    <div className={cx('volume_bar')}>
                                        <input
                                            className={cx('progress_bar')}
                                            type="range"
                                            onChange={(e) => {
                                                handelVolumeProgress(e.target.value);
                                            }}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <div className={cx('progress_selector')}></div>
                                    </div>
                                </div>

                                <div className={cx('btn_report')}>
                                    <FontAwesomeIcon className={cx('btn_icon')} icon={faFlagCheckered} />
                                    <p className={cx('btn_text')}>Report</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('btn_action')}>
                            <button className={cx('btn_like')}>
                                <HeartIcon />
                            </button>
                            <strong className={cx('btn_count')}>{data.likes_count}</strong>
                            <button className={cx('btn_message')}>
                                <MessageVideoIcon />
                            </button>
                            <strong className={cx('btn_count')}>{data.comments_count}</strong>
                            <button className={cx('btn_share')}>
                                <ShareVideoIcon />
                            </button>
                            <strong className={cx('btn_count')}>{data.shares_count}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecomendItem;
