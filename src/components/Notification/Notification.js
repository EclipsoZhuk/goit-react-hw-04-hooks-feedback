import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

class Notification extends Component {
    static defaultProps = {
        message: ' ',
    };

    static propTypes = {
        message: PropTypes.string.isRequired,
    };

    render() {
        return <h2 className={s.notification}>{this.props.message}</h2>;
    }
}

export default Notification;
