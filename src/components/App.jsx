import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Message } from './Statistics/Statistics.styled';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    console.log(feedback);
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };

      // if (feedback === 'Good') {
      //   return { good: prevState.good + 1 };
      // }

      // if (feedback === 'Neutral') {
      //   return { neutral: prevState.neutral + 1 };
      // }

      // if (feedback === 'Bad') {
      //   return { bad: prevState.bad + 1 };
      // }
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!(this.countTotalFeedback() === 0) ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Message>
              <Notification message="There is no feedback" />
            </Message>
          )}
        </Section>
      </>
    );
  }
}
