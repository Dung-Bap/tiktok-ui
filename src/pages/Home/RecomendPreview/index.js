import classNames from 'classnames/bind';
import styles from './RecommendPreview.module.scss';
import RecomendListItem from '../RecomendListItem';

const cx = classNames.bind(styles);

function RecomendPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((recommend) => {
                return <RecomendListItem key={recommend.id} data={recommend} />;
            })}
        </div>
    );
}

export default RecomendPreview;
