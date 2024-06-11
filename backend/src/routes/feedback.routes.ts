import { Router } from 'express';
import { getFeedbacks, submitFeedback } from '../controllers/feedback.controller';

const router = Router();

router.get('/', getFeedbacks);
router.post('/', submitFeedback);

export default router;

