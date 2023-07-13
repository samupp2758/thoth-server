import { Controller } from "../../util/generic.controller";
import helpers from "../../util/helpers";
import Fields from "../fields/model";
import SubFields from "./model";
const context_class = SubFields;
const context = " SubFields";
const controller = new Controller(context_class);

const add = async (req: any, res: any) => {
  helpers.doesItExist(Fields,"field",req, res, () => {
    controller.add(req, res);
  });
};

const update = async (req: any, res: any) => {
  helpers.doesItExist(SubFields, "id", req, res, () => {
    helpers.doesItExist(Fields,"field",req, res, () => {
      controller.update(req, res);
    });
  },true);
};

export default {
  list: controller.list,
  get: controller.get,
  main: controller.main,
  add,
  update,
  del: controller.del,
};
