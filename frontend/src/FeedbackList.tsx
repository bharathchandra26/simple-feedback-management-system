import React from 'react';
import { Feedback } from '../types';

interface Props {
  feedbacks: Feedback[];
}

const FeedbackList: React.FC<Props> = ({ feedbacks }) => {
  return (
    <div>
      <h2>Feedbacks</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index}>
          <h3>{feedback.name}</h3>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
