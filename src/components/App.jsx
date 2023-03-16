import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Message } from './Statistics/Statistics.styled';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.ceil((good / countTotalFeedback()) * 100);
  };
  const feedbackArrayNames = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackArrayNames}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!(countTotalFeedback() === 0) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Message>
            <Notification message="There is no feedback" />
          </Message>
        )}
      </Section>
    </>
  );
};
