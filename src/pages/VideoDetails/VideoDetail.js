import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './VideoDetail.module.scss';
import Image from '~/component/Image';
import { faCheckCircle, faChevronDown, faChevronUp, faClose, faPlay } from '@fortawesome/free-solid-svg-icons';
import {
    EmbedIcon,
    FacebookIcon,
    FlagIcon,
    HashTagMusicIcon,
    HeartIcon,
    LogoCricleIcon,
    MoreShareIcon,
    SendIcon,
    TwitterIcon,
    VolumeIcon,
    VolumeMutedIcon,
    WhatsAppIcon,
} from '~/component/Icons';
import Button from '~/component/Button/Button';
import { MessageVideoIcon } from '~/component/Icons';
import * as videoService from '~/services/videoService';
import config from '~/config';
import { videoEnvironment } from '~/context/VideoContext/VideoContext';

const cx = classNames.bind(styles);

function VideoDetail() {
    const [videoContainerRef, isInView] = useInView({ root: null, rootMargin: '20px', threshold: 0.47 });
    const getVolume = JSON.parse(localStorage.getItem('_volume'));
    const contextVideo = useContext(videoEnvironment);
    const currentVolume = contextVideo.valueProgress / 100;

    const navigate = useNavigate();
    const { videoId } = useParams();

    const [videoDetail, setVideoDetail] = useState({});
    const [mute, setMute] = useState(true);
    const videoRef = useRef();
    const selectorRef = useRef();

    const handleGoback = () => {
        navigate(-1);
    };

    const handlePlayBtn = () => {
        if (contextVideo.isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        contextVideo.setIsPlaying(!contextVideo.isPlaying);
    };

    const handleVolumeBtn = (e) => {
        e.stopPropagation();
        e.preventDefault();
        contextVideo.setIsvolumed(!contextVideo.isVolumed);
        if (contextVideo.isVolumed) {
            contextVideo.setValueProgress(0);
            selectorRef.current.style.width = 0;
        } else {
            // Logic vẫn chạy mà nhìn tều thật sự !!!
            selectorRef.current.style.width = `${getVolume === 0 || getVolume === null ? 0.6 * 100 : getVolume * 100}%`;
            contextVideo.setValueProgress(getVolume === 0 || getVolume === null ? 0.6 * 100 : getVolume * 100);
        }
    };

    const handleValueProgress = (value) => {
        const _volume = value / 100;
        contextVideo.setValueProgress(value);
        localStorage.setItem('_volume', JSON.stringify(_volume));
    };

    const handlePropagation = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        window.history.replaceState(null, '', `${`/@${contextVideo.nickName}`}/video/${contextVideo.videoId}`);
    }, [contextVideo.nickName, contextVideo.videoId]);

    useEffect(() => {
        contextVideo.setIsvolumed(currentVolume !== 0);
        videoRef.current.volume = currentVolume;
        selectorRef.current.style.width = `${currentVolume * 100}%`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentVolume]);

    useEffect(() => {
        if (isInView) {
            videoRef.current.play();
            videoRef.current.volume = currentVolume;
            selectorRef.current.style.width = `${currentVolume * 100}%`;
            setMute(false);
        } else {
            videoRef.current.load();
            contextVideo.setIsPlaying(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.getVideo(contextVideo.videoId || videoId);
            setVideoDetail(result);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contextVideo.videoId]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video_container')} onClick={handlePlayBtn}>
                <Image className={cx('img')} alt="" src={videoDetail?.thumb_url} />
                <div className={cx('wrapper_video')} ref={videoContainerRef}>
                    <video
                        className={cx('video')}
                        src={videoDetail?.file_url}
                        autoPlay
                        muted={mute}
                        loop
                        ref={videoRef}
                    />
                </div>
                <FontAwesomeIcon onClick={handleGoback} className={cx('close_icon')} icon={faClose} />
                <Link to={config.routes.home}>
                    <LogoCricleIcon className={cx('logo')} />
                </Link>
                <div className={cx('report')}>
                    <FlagIcon className={cx('report_icon')} />
                    <span className={cx('report_text')}>Report</span>
                </div>
                {contextVideo.isPlaying && <FontAwesomeIcon className={cx('play_btn')} icon={faPlay} />}
                {/* sai tên class btn ahihi */}
                <FontAwesomeIcon
                    className={cx('next_btn', contextVideo.positionVideo === 0 ? 'none' : '')}
                    onClick={contextVideo.handlePrevVideo}
                    icon={faChevronUp}
                />
                <FontAwesomeIcon
                    className={cx(
                        'prev_btn',
                        contextVideo.positionVideo === contextVideo.listVideo.length - 1 ? 'none' : '',
                    )}
                    icon={faChevronDown}
                    onClick={contextVideo.handleNextVideo}
                />
                <div className={cx('volume_control')}>
                    <div className={cx('volume_bar')} onClick={handlePropagation}>
                        <input
                            className={cx('progress_bar')}
                            value={contextVideo.valueProgress}
                            onChange={(e) => handleValueProgress(e.target.value)}
                            type="range"
                            min={0}
                            max={100}
                            step={1}
                        />
                        <div className={cx('progress_selector')} ref={selectorRef}></div>
                    </div>
                </div>
                <div className={cx('btn_voice')} onClick={handleVolumeBtn}>
                    {contextVideo.isVolumed ? (
                        <VolumeIcon className={cx('volume_btn')} />
                    ) : (
                        <VolumeMutedIcon className={cx('muted_btn')} />
                    )}
                </div>
            </div>
            <div className={cx('user')}>
                <div className={cx('header')}>
                    <Link to={`/@${videoDetail?.user?.nickname}`}>
                        <div className={cx('user_wrapper')}>
                            <Image className={cx('user_img')} alt="" src={videoDetail?.user?.avatar} />
                            <div className={cx('user_container')}>
                                <span
                                    className={cx('nickname')}
                                >{`${videoDetail?.user?.first_name} ${videoDetail?.user?.last_name}`}</span>
                                <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />
                                <div className={cx('content')}>
                                    <span className={cx('name')}>{videoDetail?.user?.nickname}</span>
                                    <span className={cx('history')}>{videoDetail?.published_at}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Button className={cx('button')} outline>
                        Follow{' '}
                    </Button>
                </div>
                <div className={cx('main')}>
                    <span className={cx('des')}>{videoDetail?.description}</span>
                    <h4 className={cx('name_music')}>
                        <HashTagMusicIcon className={cx('music_icon')} />
                        {videoDetail?.music}
                    </h4>
                    <div className={cx('interactive')}>
                        <div className={cx('interact')}>
                            <span className={cx('heart_icon')}>
                                <HeartIcon />
                            </span>
                            <strong className={cx('count_heart')}>{videoDetail?.likes_count}</strong>
                            <span className={cx('message_icon')}>
                                <MessageVideoIcon />
                            </span>
                            <strong className={cx('count')}>{videoDetail?.comments_count}</strong>
                        </div>
                        <div className={cx('share')}>
                            <button className={cx('share_icon')}>
                                <EmbedIcon />
                            </button>
                            <button className={cx('share_icon')}>
                                <SendIcon />
                            </button>
                            <button className={cx('share_icon')}>
                                <FacebookIcon />
                            </button>
                            <button className={cx('share_icon')}>
                                <WhatsAppIcon />
                            </button>
                            <button className={cx('share_icon')}>
                                <TwitterIcon />
                            </button>
                            <button className={cx('share_icon')}>
                                <MoreShareIcon />
                            </button>
                        </div>
                    </div>
                    Loading...
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;
