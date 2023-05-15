import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './VideoDetail.module.scss';
import Image from '~/component/Image';
import {
    faCheckCircle,
    faChevronDown,
    faChevronUp,
    faClose,
    faPlay,
    faVolumeHigh,
    faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
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
    WhatsAppIcon,
} from '~/component/Icons';
import Button from '~/component/Button';
import { MessageVideoIcon } from '~/component/Icons';
import * as videoService from '~/services/videoService';
import { videoEnvironment } from '~/context/VideoContext/VideoContext';
import config from '~/config';

const cx = classNames.bind(styles);

function VideoDetail() {
    const [videoDetail, setVideoDetail] = useState({});
    const contextVideo = useContext(videoEnvironment);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.getVideo(contextVideo.videoId);
            setVideoDetail(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video_container')}>
                <Image className={cx('img')} alt="" src={videoDetail?.thumb_url} />
                <div className={cx('wrapper_video')}>
                    <video className={cx('video')} src={videoDetail?.file_url} autoPlay muted loop />
                </div>
                <FontAwesomeIcon className={cx('close_icon')} icon={faClose} />
                <Link to={config.routes.home}>
                    <LogoCricleIcon className={cx('logo')} />
                </Link>
                <div className={cx('report')}>
                    <FlagIcon className={cx('report_icon')} />
                    <span className={cx('report_text')}>Report</span>
                </div>
                <FontAwesomeIcon className={cx('play_btn')} icon={faPlay} />
                <FontAwesomeIcon className={cx('next_btn')} icon={faChevronUp} />
                <FontAwesomeIcon className={cx('prev_btn')} icon={faChevronDown} />
                <div className={cx('volume_control')}>
                    <div className={cx('volume_bar')}>
                        <input className={cx('progress_bar')} type="range" min={0} max={100} step={1} />
                        <div className={cx('progress_selector')}></div>
                    </div>
                </div>
                <FontAwesomeIcon className={cx('volume_btn')} icon={faVolumeHigh} />
                <FontAwesomeIcon className={cx('muted_btn')} icon={faVolumeMute} />
            </div>
            <div className={cx('user')}>
                <div className={cx('header')}>
                    <div className={cx('user_wrapper')}>
                        <Image className={cx('user_img')} alt="" src={videoDetail?.user?.avatar} />
                        <div className={cx('user_container')}>
                            <span className={cx('nickname')}>{videoDetail?.user?.nickname}</span>
                            <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />
                            <div className={cx('content')}>
                                <span
                                    className={cx('name')}
                                >{`${videoDetail?.user?.first_name} ${videoDetail?.user?.last_name}`}</span>
                                <span className={cx('history')}>{videoDetail?.published_at}</span>
                            </div>
                        </div>
                    </div>

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
