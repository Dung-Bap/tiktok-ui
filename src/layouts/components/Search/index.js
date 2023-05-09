import { useEffect, useState, useRef } from 'react';
import { faTimesCircle, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchService from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';
import AccountItem from '../AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/Hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showSearchResult, setShowSearchResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        // trim ở đây để loại bỏ dấu cách
        if (!debounced.trim()) {
            // when deleting the search
            setSearchResults([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);
            setSearchResults(result);

            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    const inputRef = useRef();

    const handelClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResults([]);
    };

    const handelHideOnSearhResult = () => {
        setShowSearchResult(false);
        setSearchValue('');
    };

    const handelHideSearhResult = () => {
        setShowSearchResult(false);
    };

    return (
        // Using a wrapper <div>tag around the reference element
        //  solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                placement="bottom"
                visible={showSearchResult && searchResults.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}> Accounts</h4>
                            {searchResults.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    data={result}
                                    handelHideOnSearhResult={handelHideOnSearhResult}
                                />
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
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />
                    {!!searchValue && !loading && (
                        <button onClick={handelClear} className={cx('clear')}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
