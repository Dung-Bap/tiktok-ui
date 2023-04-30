import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';

import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAccount({ label, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>{label}</h2>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

export default SuggestedAccount;
