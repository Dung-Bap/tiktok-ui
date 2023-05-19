import { createContext, useState } from 'react';

export const videoEnvironment = createContext();

function VideoContext({ children }) {
    const [volumeDefault, setVolumeDefault] = useState(0.2);
    const [videoId, setVideoId] = useState(0);

    const handelSetVolumeDefault = (value) => {
        setVolumeDefault(value);
    };

    const handelGetVideoId = (id) => {
        setVideoId(id);
    };

    const value = {
        videoId,
        volumeDefault,
        handelGetVideoId,
        handelSetVolumeDefault,
    };

    return <videoEnvironment.Provider value={value}>{children}</videoEnvironment.Provider>;
}

export default VideoContext;
