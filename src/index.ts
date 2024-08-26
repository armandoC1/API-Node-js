import express from 'express';
import bodyParser from 'body-parser';
import StudentRouters from './routes/estudiante.route';
import { Student } from './models/estudiante.model';

const app = express();

app.use(bodyParser.json()) //para que transforma de body a json 

app.use('/api', StudentRouters);

const PORT = 3001

app.listen(PORT, () => {
        console.log(`server running in port ${PORT}`)
        Student.createTable();

})
