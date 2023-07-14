import { useState, useEffect, useContext } from 'react';

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, HomeIconActive, LiveIcon, LiveIconActive, UserIcon, UserIconActive } from '~/component/Icons';
import SuggestedAccount from '~/suggestedaccount/SuggestedAccount';
import * as usersService from '~/services/usersService';
import Button from '~/component/Button/Button';
import { modalEnvironment } from '~/context/ModalContext/ModalContext';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [perpage, setPerpage] = useState(5);
    const PAGE = Math.floor(Math.random() * 12 + 1);

    const { handleShowModal } = useContext(modalEnvironment);

    useEffect(() => {
        usersService
            .getSuggested(PAGE, perpage)
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((error) => {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [perpage]);

    const handleMoreBtn = () => {
        if (perpage === 5) {
            setPerpage(15);
        } else {
            setPerpage(5);
        }
    };

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
            <div className={cx('login')}>
                <p className={cx('text')}>Log in to follow creators, like videos, and view comments.</p>
                <Button onClick={handleShowModal} className={cx('button')} outline>
                    Log in
                </Button>
            </div>
            <SuggestedAccount
                label={'Suggested accounts'}
                data={suggestedUsers}
                perpage={perpage}
                onMoreBtn={handleMoreBtn}
            />
        </aside>
    );
}
export default Sidebar;
