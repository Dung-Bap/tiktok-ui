import { useEffect, useState, useRef } from 'react';
import { faTimesCircle, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Layout/components/Popper';
import AccountItem from '../AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showSearchResult, setShowSearchResult] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // trim ở đây để loại bỏ dấu cách
        if (!searchValue.trim()) {
            // when deleting the search
            setSearchResults([]);
            return;
        }
        setLoading(true);
        // encode để loại bỏ các ký tự như % ?
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResults(res.data);
                setLoading(false);
            })
            // when internet error
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const inputRef = useRef();

    const handelClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResults([]);
    };

    const handelHideSearhResult = () => {
        setShowSearchResult(false);
    };

    return (
        <HeadlessTippy
            visible={showSearchResult && searchResults.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}> Accounts</h4>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handelHideSearhResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => {
                        let value = e.target.value;
                        if (value.trim() === '') {
                            setSearchValue('');
                        } else {
                            setSearchValue(value);
                        }
                    }}
                    onFocus={() => setShowSearchResult(true)}
                    placeholder="Search account and videos"
                    spellCheck={false}
                />
                {!!searchValue && !loading && (
                    <button onClick={handelClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
