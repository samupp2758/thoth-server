import { Controller } from "../../util/generic.controller";
import helpers from "../../util/helpers";
import Subjects from "../subjects/model";
import Fields from "./model";
import crypto from "crypto";
const context_class = Fields;
const context = " Fields";
const controller = new Controller(context_class);

const doesSubjectExist = async (req: any, res: any, next: any) => {
  if (typeof req.body.subject == "undefined") {
    next();
    return 0;
  }
  var subject = await Subjects
    .findByPk(req.body.subject)
    .catch((error) => {
      res.json({ error });
    });
  if (subject?.dataValues.length != 0) {
    next();
  } else {
   res.json({ error: "Subject not found" });
   return 0;
  }
};

const add = async (req: any, res: any) => {
  if (typeof req.body.subject == "undefined") {
    res.json({ error: "Subject cannot be null" });
    return 0;
  }
  doesSubjectExist(req, res, () => {
    controller.add(req, res);
  });
};

const update = async (req: any, res: any) => {
  doesSubjectExist(req, res, () => {
    controller.update(req, res);
  });
};

export default {
  list: controller.list,
  get: controller.get,
  main: controller.main,
  add,
  update,
  del: controller.del,
};
