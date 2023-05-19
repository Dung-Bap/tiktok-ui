import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './CardItem.module.scss';
import Image from '~/component/Image';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function CardItem({ card, index, play = false, handelPlayVideo }) {
    const videoRef = useRef();

    useEffect(() => {
        play
            ? setTimeout(() => {
                  videoRef.current.play();
              }, 150)
            : videoRef.current.load();
    }, [play]);

    const handleClickFollow = (e) => {
        e.preventDefault();
    };

    return (
        <Link to={`/@${card.nickname}`} className={cx('wrapper')} onMouseOver={() => handelPlayVideo(index)}>
            <img className={cx('img_thumbnail')} alt="" src={card.popular_video.thumb_url} />
            <video
                className={cx('video', { active: play })}
                src={card.popular_video.file_url}
                ref={videoRef}
                loop
                muted
            />
            <div className={cx('content')}>
                <Image className={cx('content_img')} alt="" src={card.avatar} />
                <h5 className={cx('content_name')}>{`${card.first_name} ${card.last_name}`}</h5>
                <h6 className={cx('content_des')}>
                    <span className={cx('nick_name')}>{card.nickname}</span>
                    {card.tick && <FontAwesomeIcon className={cx('tick')} icon={faCheckCircle} />}
                </h6>

                <Button onClick={handleClickFollow} className={cx('button')} primary={true}>
                    Follow
                </Button>
            </div>
        </Link>
    );
}

export default CardItem;
