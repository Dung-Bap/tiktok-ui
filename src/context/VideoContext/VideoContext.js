import { createContext, useState } from 'react';

export const videoEnvironment = createContext();

function VideoContext({ children }) {
    const [videoId, setVideoId] = useState(0);
    const [isVolumed, setIsvolumed] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [valueProgress, setValueProgress] = useState(0);

    const handelGetVideoId = (id) => {
        setVideoId(id);
    };
    const value = {
        isVolumed,
        isPlaying,
        videoId,
        valueProgress,
        handelGetVideoId,
        setIsvolumed,
        setIsPlaying,
        setValueProgress,
    };

    return <videoEnvironment.Provider value={value}>{children}</videoEnvironment.Provider>;
}

export default VideoContext;
