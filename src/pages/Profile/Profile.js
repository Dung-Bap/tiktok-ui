import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import ProfilePreview from './ProfilePreview/ProfilePreview';
import { KeyIcon } from '~/component/Icons';
import { useLocation } from 'react-router-dom';
import * as profileService from '~/services/profileService';
import { useContext, useEffect, useState } from 'react';
import ProfileVideo from './ProfileVideo/ProfileVideo';
import { videoEnvironment } from '~/context/VideoContext/VideoContext';
const cx = classNames.bind(styles);

function Profile() {
    const contextVideo = useContext(videoEnvironment);

    const [dataProfile, setDataProfile] = useState(null);
    const location = useLocation();
    const locationProfile = location.pathname;

    const [positionPlay, setPositionPlay] = useState(0);
    const handelPlayVideo = (value) => {
        setPositionPlay(value);
    };

    useEffect(() => {
        contextVideo.handleSetPositionVideo(positionPlay);
    }, [contextVideo, positionPlay]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await profileService.getProfile(locationProfile);
            setDataProfile(result);
            contextVideo.handleSetListVideo(result?.videos);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationProfile]);

    return (
        <div className={cx('wrapper')}>
            {dataProfile === null ? (
                <></>
            ) : (
                <div className={cx('container')}>
                    <ProfilePreview data={dataProfile} />
                    <div className={cx('main')}>
                        <div className={cx('select')}>
                            <p className={cx('video')}>Videos</p>
                            <p className={cx('like')}>
                                <KeyIcon className={cx('key-icon')} />
                                <span>Liked</span>
                            </p>
                        </div>
                        <div className={cx('list_video')}>
                            {dataProfile === null ? (
                                <></>
                            ) : (
                                dataProfile.videos.map((video, index) => (
                                    <ProfileVideo
                                        key={video.id}
                                        data={video}
                                        videoId={video.id}
                                        index={index}
                                        play={index === positionPlay}
                                        handelPlayVideo={handelPlayVideo}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
