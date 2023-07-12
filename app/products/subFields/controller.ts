import { Controller } from "../../util/generic.controller";
import Fields from "../fields/model";
import SubFields from "./model";
const context_class = SubFields;
const context = " SubFields";
const controller = new Controller(context_class);

const doesFieldExist = async (req: any, res: any, next: any) => {
  if (typeof req.body.field == "undefined") {
    next();
  }
  var field = await Fields
    .findByPk(req.body.field)
    .catch((error) => {
      res.json({ error });
    });
  if (field?.dataValues.length != 0) {
    next();
  } else {
    res.json({ error: "Field not found" });
  }
};

const add = async (req: any, res: any) => {
  if (typeof req.body.field == "undefined") {
    res.json({ error: "Field cannot be null" });
    return 0;
  }
  doesFieldExist(req, res, () => {
    controller.add(req, res);
  });
};

const update = async (req: any, res: any) => {
  doesFieldExist(req, res, () => {
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
