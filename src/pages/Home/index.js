import { useEffect, useState } from 'react';

import * as videoService from '~/services/videoService';
import RecomendPreview from './RecomendPreview';

function Home() {
    const [recommendVideo, setRecommendVideo] = useState([]);

    useEffect(() => {
        videoService
            .getVideoListForYou()
            .then((data) => {
                setRecommendVideo(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <RecomendPreview data={recommendVideo} />
        </div>
    );
}

export default Home;
