import * as request from '~/utils/request';

export const getProfile = async (pathName) => {
    try {
        const res = await request.get(`users${pathName}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
