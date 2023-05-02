import * as request from '~/utils/request';

// export const getVideo = async (id) => {
//     try {
//         const res = await request.get(`videos/${id}`);
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const deleteVideo = async (videoID) => {
//     try {
//         const res = await request.deleteMethod(`videos/${videoID}`);
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const getVideoListForYou = async (type = 'for-you', page = 3) => {
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

// export const getVideoListFollowing = async ({ type = 'following', page }) => {
//     try {
//         const res = await request.get('videos', {
//             params: {
//                 type,
//                 page,
//             },
//         });
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };
