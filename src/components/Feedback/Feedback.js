import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

class Feedback extends Component {
    static defaultProps = {
        options: [],
    };

    static propTypes = {
        options: PropTypes.array.isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className={s.feedback}>
                <h1 className={s.title}>Please leave feedback</h1>
                <div>
                    {this.props.options.map(option => (
                        <button
                            key={option}
                            type="button"
                            value={option}
                            className={s.buttons}
                            onClick={e => {
                                this.props.onLeaveFeedback(e);
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Feedback;
