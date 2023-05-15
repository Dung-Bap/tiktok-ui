import { useEffect, useState } from 'react';

import * as videoService from '~/services/videoService';
import RecomendPreview from './RecomendPreview/RecomendPreview';

function Home() {
    const [recommendVideo, setRecommendVideo] = useState([]);
    const TYPE = 'for-you';
    const PAGE = Math.floor(Math.random() * 15 + 1);

    useEffect(() => {
        videoService
            .getVideoListForYou(TYPE, PAGE)
            .then((data) => {
                setRecommendVideo(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <RecomendPreview data={recommendVideo} />
        </>
    );
}

export default Home;
