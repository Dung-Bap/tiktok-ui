import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, HomeIconActive, LiveIcon, LiveIconActive, UserIcon, UserIconActive } from '~/component/Icons';
import SuggestedAccount from '~/suggestedaccount/SuggestedAccount';

const cx = classNames.bind(styles);

function Sidebar() {
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
            <SuggestedAccount label={'Suggested accounts'} />
            <SuggestedAccount label={'Following accounts'} />
        </aside>
    );
}
export default Sidebar;
