import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';

import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>{label}</h2>
            <AccountItem />
            <AccountItem />
            <AccountItem />
        </div>
    );
}

export default SuggestedAccount;
