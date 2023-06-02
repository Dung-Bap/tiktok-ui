import { createContext, useEffect, useState } from 'react';

export const videoEnvironment = createContext();

function VideoContext({ children }) {
    const [isVolumed, setIsvolumed] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [valueProgress, setValueProgress] = useState(0);

    const [videoId, setVideoId] = useState(0);
    const [listVideo, setListVideo] = useState([]);
    const [positionVideo, setPositionVideo] = useState(0);
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        setVideoId(listVideo[positionVideo]?.id);
        setNickName(listVideo[positionVideo]?.user?.nickname);
    }, [listVideo, positionVideo]);

    const handelGetVideoId = (id) => {
        setVideoId(id);
    };
    const handleSetListVideo = (value) => {
        setListVideo(value);
    };

    const handleSetPositionVideo = (value) => {
        setPositionVideo(value);
    };

    const handleNextVideo = (e) => {
        setIsPlaying(false);
        e.stopPropagation();
        if (positionVideo >= listVideo.length - 1) {
            setPositionVideo(listVideo.length - 1);
        } else {
            setPositionVideo((prev) => prev + 1);
        }
    };

    const handlePrevVideo = (e) => {
        setIsPlaying(false);
        e.stopPropagation();
        if (positionVideo <= 0) {
            setPositionVideo(0);
        } else {
            setPositionVideo((prev) => prev - 1);
        }
    };

    const value = {
        isVolumed,
        isPlaying,
        videoId,
        valueProgress,
        listVideo,
        positionVideo,
        nickName,
        handelGetVideoId,
        setIsvolumed,
        setIsPlaying,
        setValueProgress,
        handleSetListVideo,
        handleNextVideo,
        handlePrevVideo,
        handleSetPositionVideo,
    };

    return <videoEnvironment.Provider value={value}>{children}</videoEnvironment.Provider>;
}

export default VideoContext;
