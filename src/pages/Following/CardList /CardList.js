import classNames from 'classnames/bind';
import styles from './CardList.module.scss';
import CardItem from '../CardItem/CardItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CardList({ data }) {
    const [positionPlay, setPositionPlay] = useState(0);

    const handelPlayVideo = (value) => {
        setPositionPlay(value);
    };

    return (
        <div className={cx('wrapper')}>
            {data.map((card, index) => (
                <CardItem
                    key={card.id}
                    index={index}
                    card={card}
                    play={index === positionPlay}
                    handelPlayVideo={handelPlayVideo}
                />
            ))}
        </div>
    );
}
export default CardList;
