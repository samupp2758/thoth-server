import express from "express";
import bodyParser from "body-parser";
import students from "./users/students";
import teachers from "./users/teachers";

import subjects from "./products/subjects";
import files from "./products/files";
import search from "./products/search";
import fields from "./products/fields";
import subFields from "./products/subFields";
import comments from "./products/comments";

import tots from "./products/tots";
import methodOverride from "method-override";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(methodOverride());

app.use((err: any, req: any, res: any, next: any) => {
    res.status(500);
    res.json({ error: err });
  });

app.use("/students", students);
app.use("/teachers", teachers);

app.use("/subjects", subjects);
app.use("/files", files);
app.use("/fields", fields);
app.use("/subfields", subFields);
app.use("/comments", comments);

app.use("/tots", tots);

app.use("/search", search);

export default app;
