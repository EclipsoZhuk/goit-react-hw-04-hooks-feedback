import PropTypes from 'prop-types';
import s from './Feedback.module.css';

export default function Feedback({ options = [], onLeaveFeedback }) {
    return (
        <div className={s.feedback}>
            <h1 className={s.title}>Please leave feedback</h1>
            <div>
                {options.map(option => (
                    <button
                        key={option}
                        type="button"
                        value={option}
                        className={s.buttons}
                        onClick={e => {
                            onLeaveFeedback(e);
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

Feedback.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
