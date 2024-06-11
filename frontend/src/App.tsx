import React, { useState, useEffect } from 'react';
import './App.css';

import './FeedbackForm.css'; 
import './FeedbackList.css'; 
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { Feedback } from './types';

const App: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const fetchFeedbacks = async () => {
    const response = await fetch('http://localhost:5000/feedback');
    const data = await response.json();
    setFeedbacks(data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="App">
      <h1>Feedback Management System</h1>
      <FeedbackForm onNewFeedback={fetchFeedbacks} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;
