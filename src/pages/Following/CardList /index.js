import classNames from 'classnames/bind';
import styles from './CardList.module.scss';
import CardItem from '../CardItem';

const cx = classNames.bind(styles);

function CardList({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((card, index) => (
                <CardItem key={card.id} index={index} card={card} />
            ))}
        </div>
    );
}
export default CardList;
