import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  onNewFeedback: () => void;
}

const FeedbackForm: React.FC<Props> = ({ onNewFeedback }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && feedback) {
      await axios.post('http://localhost:5000/feedback', { name, feedback });
      setName('');
      setFeedback('');
      onNewFeedback();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Your Feedback"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
