// import { Component } from 'react';
import { Statistics } from '../Statistics/statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from 'components/Notification/notification';
import css from './Feedback.module.css';
import { useState } from 'react';

const Feedback = () => {
  const [number, setNumber] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = type => {
    setNumber(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const countTotalFeedback = () => {
    const sum = number.good + number.neutral + number.bad;
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((number.good / countTotalFeedback()) * 100);
  };

  return (
    <div className={css.all}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={number.good}
            neutral={number.neutral}
            bad={number.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

// class Feedback1 extends Component {
//

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     return Math.ceil((good / totalFeedback) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className={css.all}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'bad', 'neutral']}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default Feedback;
