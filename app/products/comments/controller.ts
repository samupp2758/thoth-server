import { Model, ModelCtor } from "sequelize";
import Students from "../../users/students/model";
import { Controller } from "../../util/generic.controller";
import Tots from "../tots/model";
import Comments from "./model";
import helpers from "../../util/helpers";
const context_class = Comments;
const controller = new Controller(context_class);


const add = async (req: any, res: any) => {
  if (typeof req.body.author == "undefined") {
    res.json({ error: "Author cannot be null" });
    return 0;
  }
  helpers.doesItExist(Students,"author",req, res, () => {
    helpers.doesItExist(Tots,"tot",req, res, () => {
      controller.add(req, res);
    });
  });
};

const update = async (req: any, res: any) => {
  helpers.doesItExist(Students,"author",req, res, () => {
    helpers.doesItExist(Tots,"tot",req, res, () => {
      controller.add(req, res);
    });
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
