import { useState, useEffect } from 'react';

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, HomeIconActive, LiveIcon, LiveIconActive, UserIcon, UserIconActive } from '~/component/Icons';
import SuggestedAccount from '~/suggestedaccount/SuggestedAccount';
import * as usersService from '~/services/usersService';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followingUsers, setFollowingUsers] = useState([]);

    useEffect(() => {
        usersService
            .getSuggested()
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeIconActive />} title="For you" />
                <MenuItem
                    to={config.routes.following}
                    icon={<UserIcon />}
                    iconActive={<UserIconActive />}
                    title="Following"
                />
                <MenuItem to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveIconActive />} title="LIVE" />
            </Menu>
            <SuggestedAccount label={'Suggested accounts'} data={suggestedUsers} />
            <SuggestedAccount label={'Suggested accounts'} data={suggestedUsers} />
            <SuggestedAccount label={'Following accounts'} />
        </aside>
    );
}
export default Sidebar;
