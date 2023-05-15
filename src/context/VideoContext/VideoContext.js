import { createContext, useState } from 'react';

export const videoEnvironment = createContext();

function VideoContext({ children }) {
    const [videoId, setVideoId] = useState(0);
    const handelGetVideoId = (id) => {
        setVideoId(id);
    };

    const value = {
        videoId,
        handelGetVideoId,
    };

    return <videoEnvironment.Provider value={value}>{children}</videoEnvironment.Provider>;
}

export default VideoContext;
