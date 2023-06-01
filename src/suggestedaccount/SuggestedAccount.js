import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';

import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAccount({ label, data = [], perpage, onMoreBtn }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>{label}</h2>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p onClick={onMoreBtn} className={cx('more-btn')}>
                {perpage === 5 ? 'See all' : 'See less'}
            </p>
        </div>
    );
}

export default SuggestedAccount;
