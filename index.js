import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/flashcards_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('It works!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
