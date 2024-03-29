import Files from "../../products/files/model";
import Subjects from "../../products/subjects/model";
import { Controller } from "../../util/generic.controller";
import helpers from "../../util/helpers";
import Students from "./model";
import crypto from "crypto";
const context_class = Students;
const controller = new Controller(context_class);

const add = async (req: any, res: any) => {
  helpers.doesItExist(Subjects,"interest",req,res,()=>{
    helpers.doesItExist(Files,"profile_pic",req,res,()=>{
      controller.add(req, res);
    });
  });
};

const update = async (req: any, res: any) => {
  helpers.doesItExist(Subjects,"interest",req,res,()=>{
    helpers.doesItExist(Files,"profile_pic",req,res,()=>{
      controller.update(req, res);
    });
  });
};

const login = (req: any, res: any) => {
  res.json("Login Student");
};

export default {
  add,
  update,
  login,
  list: controller.list,
  get: controller.get,
  main: controller.main,
  del: controller.del,
};
