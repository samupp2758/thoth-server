import express from 'express';
import bodyParser from 'body-parser';
import students from './users/students';
import subjects from './products/subjects';
import files from './products/files';
import search from './products/search';
import fields from './products/fields';
import methodOverride from 'method-override';
import Fields from './products/fields/model';


const app = express()

app.use(bodyParser.json())
app.use('/students', students)
app.use('/subjects', subjects)
app.use('/files', files)
app.use('/fields',fields)

app.use('/search', search)

export default app;