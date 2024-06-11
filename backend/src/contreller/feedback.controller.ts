import { Request, Response } from 'express';
import { getAllFeedbacks, addFeedback } from '../services/feedback.service';

export const getFeedbacks = (req: Request, res: Response) => {
  const feedbacks = getAllFeedbacks();
  res.json(feedbacks);
};

export const submitFeedback = (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  if (!name || !feedback) {
    return res.status(400).send('Name and feedback are required');
  }
  addFeedback(name, feedback);
  res.status(201).send('Feedback submitted');
};

