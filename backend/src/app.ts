import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import feedbackRoutes from './routes/feedback.routes';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/feedback', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
