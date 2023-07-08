import express from 'express';
import bodyParser from 'body-parser';
import students from './users/students';


const app = express()

app.use(bodyParser.json())
app.use('/students', students)


export default app;