// Pages
import HeaderOnLy from '~/component/Layout/HeaderOnly';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnLy },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
