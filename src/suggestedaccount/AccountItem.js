import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';

import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview/AccountPreview';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <PopperWrapper>
                <div tabIndex="-1" {...props}>
                    <AccountPreview data={data}></AccountPreview>
                </div>
            </PopperWrapper>
        );
    };
    return (
        <div>
            <Tippy placement="bottom" delay={[800, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} alt="" src={data.avatar} />
                    <div className={cx('account-info')}>
                        <span className={cx('nick-name')}>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
