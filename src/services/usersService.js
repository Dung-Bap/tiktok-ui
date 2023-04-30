import * as request from '~/utils/request';

export const getSuggested = async (page = 2, per_page = 5) => {
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
