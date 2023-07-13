import Tots from "./model";
import helpers from "../../util/helpers";
import crypto from "crypto";
import { Controller } from "../../util/generic.controller";
import Students from "../../users/students/model";
import Teachers from "../../users/teachers/model";
import SubFields from "../subFields/model";
const context_class = Tots;
const controlLer = new Controller(context_class);

const add = async (req: any, res: any) => {
  helpers.doesItExist(Teachers, "author", req, res, () => {
    helpers.doesItExist(SubFields, "sub_field", req, res, () => {
      controlLer.add(req, res);
    });
  });
};

const update = async (req: any, res: any) => {
  helpers.doesItExist(Teachers, "id", req, res, () => {
    helpers.doesItExist(Teachers, "author", req, res, () => {
      helpers.doesItExist(SubFields, "sub_field", req, res, () => {
        controlLer.update(req, res);
      });
    });
  },true);
};

export default {
  list: controlLer.list,
  get: controlLer.get,
  main: controlLer.main,
  add,
  update,
  del: controlLer.del,
};
