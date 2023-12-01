// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/ToolBoXpress', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors({ origin: '*' }));
app.use(express.json())
app.use(bodyParser.json());

const feedbackSchema = new mongoose.Schema({
  rating: Number,
  feedback: String,
  url: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

app.post('/submit-feedback', async (req, res) => {
  try {
    const { rating, feedback, url } = req.body;
    const newFeedback = new Feedback({ rating, feedback, url });
    await newFeedback.save();
    res.status(201).send('Feedback submitted successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/get-average-rating', async (req, res) => {
    try {
      const url = req.query.currentUrl; // Change req.body to req.query
      console.log(url);
      // Get average rating and count for the given URL
      const result = await Feedback.aggregate([
        { $match: { url } },
        {
          $group: {
            _id: null,
            averageRating: { $avg: '$rating' },
            count: { $sum: 1 },
          },
        },
      ]);
  
      const averageRating = result.length > 0 ? result[0].averageRating : 0;
      const count = result.length > 0 ? result[0].count : 0;
  
      res.status(200).json({ averageRating, count });
    } catch (error) {
      console.error('Error getting average rating:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
