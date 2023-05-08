import * as request from '~/utils/request';

export const getSuggested = async (page, per_page) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
