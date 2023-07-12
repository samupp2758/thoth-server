import Students from "../../users/students/model";
import { Controller } from "../../util/generic.controller";
import Fields from "./model";
const context_class = Fields;
const context = " Fields";
const controller = new Controller(context_class);

const doesAuthorExist = async (req: any, res: any, next: any) => {
  if (typeof req.body.author == "undefined") {
    next();
  }
  var student = await Students
    .findByPk(req.body.author)
    .catch((error) => {
      res.json({ error });
    });
  if (student?.dataValues.length != 0) {
   // next();
  } else {
    res.json({ error: "Author not found" });
  }
};

const add = async (req: any, res: any) => {
  if (typeof req.body.author == "undefined") {
    res.json({ error: "Author cannot be null" });
    return 0;
  }
  doesAuthorExist(req, res, () => {
    controller.add(req, res);
  });
};

const update = async (req: any, res: any) => {
  doesAuthorExist(req, res, () => {
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
