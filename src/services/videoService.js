import * as request from '~/utils/request';

export const getVideo = async (id) => {
    try {
        const res = await request.get(`videos/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getVideoListForYou = async (type, page) => {
    try {
        const res = await request.get('videos', {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
