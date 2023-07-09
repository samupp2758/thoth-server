import Subjects from "./model";
import helpers from "../../util/helpers";
import crypto from 'crypto'
const context_class = Subjects;
const context = " Subjects";

const main = (req: any, res: any) => {
  return res.json("");
};

const add = async (req: any, res: any) => {
  try {
    var subject = {
      id:crypto.randomUUID(),
      name: helpers.format(req.body.name, /[^a-zA-Z\sÀ-ú]/),
      definition: helpers.format(req.body.definition, /[^a-zA-Z\s,.À-ú!()-]/),
    };
    var response = await context_class.create(subject);
    res.json({response})
  } catch (er) {
    res.json(er)
  }
};

const del = (req: any, res: any) => {
  res.json("Delete" + context);
};

const update = (req: any, res: any) => {
  res.json("Update" + context);
};

const get = async (req: any, res: any) => {
  res.json("Get" + context);
};

const list = async (req: any, res: any) => {
  const response = await context_class.findAll();
  res.json(response);
};

export default { main, add, del, update, get, list };
