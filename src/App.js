import { useState } from 'react';
import { FEEDBACK_OPTIONS } from './data/state';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = ({ target }) => {
        const value = target.value;

        switch (value) {
            case 'good':
                setGood(prev => prev + 1);
                break;
            case 'neutral':
                setNeutral(prev => prev + 1);
                break;
            case 'bad':
                setBad(prev => prev + 1);
                break;
            default:
                return;
        }
    };

    const countZero = () =>
        good === 0 && neutral === 0 && bad === 0 ? true : false;

    const countTotalFeedback = () => good + neutral + bad;

    const countPositiveFeedbackPercentage = () =>
        Math.trunc((good / countTotalFeedback()) * 100);

    return (
        <>
            <Feedback
                options={FEEDBACK_OPTIONS}
                onLeaveFeedback={onLeaveFeedback}
            />
            {countZero() ? (
                <Notification message="No feedback given" />
            ) : (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    totalPositive={countPositiveFeedbackPercentage()}
                />
            )}
        </>
    );
}
