import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/component/Button/Button';
import Menu from '../Popper/Menu';
import Search from '../Search';
import config from '~/config';
import Image from '~/component/Image';
import { InboxIcon, MessageIcon } from '~/component/Icons';
import { modalEnvironment } from '~/context/ModalContext/ModalContext';
import { MENU_ITEMS, MENU_PROFILES } from '~/component/Variable/Variable';

const cx = classNames.bind(styles);

function Header() {
    const modalContext = useContext(modalEnvironment);
    const currentUser = false;

    const handelMenuChange = (menuItems) => {
        console.log(menuItems);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('custom-logo')}>
                    <Link to={config.routes.home} className={cx('tiktok-logo')}>
                        <img src={images.logo.default} alt="TikTok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                {' '}
                                Upload
                            </Button>
                            <Tippy delay={[0, 100]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={modalContext.handleShowModal}
                                text
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                {' '}
                                Upload
                            </Button>
                            <Button primary onClick={modalContext.handleShowModal}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? MENU_PROFILES : MENU_ITEMS} onChange={handelMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5587718fa97af29606494b3c577fbafb~c5_100x100.jpeg?x-expires=1683280800&x-signature=pKtUT2NiReROdpzJYtdmJZezrtw%3"
                                alt="Duyeennn"
                                fallback="https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
