require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const thoughtRoutes = require('./src/routes/thoughtRoutes');
const reactionRoutes = require('./src/routes/reactionRoutes');
const followRoutes = require('./src/routes/followRoutes');
const moodRoutes = require('./src/routes/moodRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);
app.use('/api/follows', followRoutes);
app.use('/api/moods', moodRoutes);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});