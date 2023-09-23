require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});