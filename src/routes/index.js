// Pages
import HeaderOnLy from '~/layouts/HeaderOnly';
import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import VideoDetail from '~/pages/VideoDetails/VideoDetail';

// Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.videoDetail, component: VideoDetail, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnLy },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
