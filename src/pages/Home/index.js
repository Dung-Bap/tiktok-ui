import { useCallback, useEffect, useRef, useState } from 'react';

import * as videoService from '~/services/videoService';
import RecomendPreview from './RecomendPreview/RecomendPreview';

function Home() {
    const [recommendVideo, setRecommendVideo] = useState([]);
    const TYPE = 'for-you';
    const PAGE = Math.floor(Math.random() * 15 + 1);
    const [callApi, setCallApi] = useState(false);

    useEffect(() => {
        videoService
            .getVideoListForYou(TYPE, PAGE)
            .then((data) => {
                setRecommendVideo((pre) => [...pre].concat(data));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [callApi]);

    const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = debounce(() => {
        const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight,
        );
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            setCallApi((pre) => !pre);
        } else {
        }
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <RecomendPreview data={recommendVideo} />
        </>
    );
}

export default Home;
