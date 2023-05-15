import classNames from 'classnames/bind';
import styles from './RecommendPreview.module.scss';
import RecomendListItem from '../RecomendItem/RecomendItem';

const cx = classNames.bind(styles);

function RecomendPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((recommend) => {
                return <RecomendListItem key={recommend.id} data={recommend} videoId={recommend.id} />;
            })}
        </div>
    );
}

export default RecomendPreview;
