import { Controller } from "../../util/generic.controller";
import helpers from "../../util/helpers";
import Subjects from "../subjects/model";
import Fields from "./model";
import crypto from "crypto";
const context_class = Fields;
const context = " Fields";
const controller = new Controller(context_class);


const add = async (req: any, res: any) => {
  helpers.doesItExist(Subjects,"subject",req, res, () => {
    controller.add(req, res);
  });
};

const update = async (req: any, res: any) => {
  helpers.doesItExist(Subjects,"subject",req, res, () => {
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
