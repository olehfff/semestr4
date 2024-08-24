const express = require('express');
const path = require('path');
const { addData } = require('./formData');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/submit', (req, res) => {
  addData(req.body);
  res.json({ message: 'Форма успішно отримана' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});