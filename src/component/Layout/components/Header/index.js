import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faSpinner, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Layout/components/Popper';

import images from '~/assets/images';
import styles from './Header.module.scss';
import AccountItem from '../AccountItem';
import Button from '~/component/Button';

const cx = classNames.bind(styles);
function Header() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo.default} alt="TikTok"></img>
                <Tippy
                    visible={searchResults.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}> Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accout and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        {' '}
                        Upload
                    </Button>
                    <Button rounded small>
                        {' '}
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
