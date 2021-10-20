import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
    good,
    neutral,
    bad,
    total,
    totalPositive,
}) {
    return (
        <div className={s.statistics}>
            <h2 className={s.title}>Statistics</h2>
            <ul className={s.list}>
                <li className={s.item}>Good: {good}</li>
                <li className={s.item}>Neutral: {neutral}</li>
                <li className={s.item}>Bad: {bad}</li>

                <li className={s.item}>
                    <span>Total: </span>
                    <span>{total}</span>
                </li>

                <li className={s.item}>
                    <span>Positive feedback: </span>
                    <span>{totalPositive}%</span>
                </li>
            </ul>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    totalPositive: PropTypes.number.isRequired,
};
