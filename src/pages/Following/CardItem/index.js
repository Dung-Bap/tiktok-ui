import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './CardItem.module.scss';
import Image from '~/component/Image';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function CardItem({ card }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img_thumbnail')} alt="" src={card.popular_video.thumb_url} />
            <video loop muted className={cx('video')} src={card.popular_video.file_url} />
            <div className={cx('content')}>
                <Image className={cx('content_img')} alt="" src={card.avatar} />
                <h5 className={cx('content_name')}>{`${card.first_name} ${card.last_name}`}</h5>
                <h6 className={cx('content_des')}>
                    <span className={cx('nick_name')}>{card.nickname}</span>
                    {card.tick && <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />}
                </h6>

                <Button className={cx('button')} primary={true}>
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default CardItem;
