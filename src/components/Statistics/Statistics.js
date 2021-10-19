import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './Statistics.module.css';

class Statistics extends Component {
    static defaultProps = {
        stateValue: { good: 0, neutral: 0, bad: 0 },
        total: 0,
    };

    static propTypes = {
        stateValue: PropTypes.object.isRequired,
        total: PropTypes.number.isRequired,
        totalPositive: PropTypes.number.isRequired,
    };

    render() {
        const dataObj = Object.entries(this.props.stateValue);
        return (
            <div className={s.statistics}>
                <h2 className={s.title}>Statistics</h2>
                <ul className={s.list}>
                    {dataObj.map(([key, value]) => (
                        <li key={shortid.generate()} className={s.item}>
                            <span className={s.name}>{key + ' '}</span>
                            <span>{value}</span>
                        </li>
                    ))}

                    <li className={s.item}>
                        <span>Total: </span>
                        <span>{this.props.total}</span>
                    </li>

                    <li className={s.item}>
                        <span>Positive feedback: </span>
                        <span>{this.props.totalPositive}%</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Statistics;
