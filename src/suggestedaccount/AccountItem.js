import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';

import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview/AccountPreview';
import Tippy from '@tippyjs/react/headless';
import Image from '~/component/Image';
import { Link } from 'react-router-dom';

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
        <Link to={`/@${data.nickname}`}>
            <Tippy appendTo={document.body} interactive placement="bottom" delay={[800, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} alt="" src={data.avatar} />
                    <div className={cx('account-info')}>
                        <span className={cx('nick-name')}>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </Link>
    );
}

export default AccountItem;
