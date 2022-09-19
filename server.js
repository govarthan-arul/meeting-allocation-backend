import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import projectRoutes from './API/Routes/project.js';

const app = express();
// const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/project',projectRoutes);



app.get('/',(req,res) => {
    res.send('Hello from Homepage.');
} )

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
