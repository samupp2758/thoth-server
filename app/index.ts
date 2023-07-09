import express from 'express';
import bodyParser from 'body-parser';
import students from './users/students';
import subjects from './products/subjects';
import files from './products/files';


const app = express()

app.use(bodyParser.json())
app.use('/students', students)
app.use('/subjects', subjects)
app.use('/files', files)


export default app;