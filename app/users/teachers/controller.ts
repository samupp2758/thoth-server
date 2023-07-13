import Files from "../../products/files/model";
import Subjects from "../../products/subjects/model";
import { Controller } from "../../util/generic.controller";
import helpers from "../../util/helpers";
import Teachers from "./model";
import Students from "./model";
import crypto from "crypto";
const context_class = Teachers;
const controller = new Controller(context_class);


const add = async (req: any, res: any) => {
  helpers.doesItExist(Subjects,"interest",req,res,()=>{
    helpers.doesItExist(Files,"profile_pic",req,res,()=>{
      helpers.doesItExist(Files,"certificate",req,res,()=>{
        helpers.doesItExist(Subjects,"subject",req,res,()=>{
        controller.add(req, res);
      });
    });
    });
  });
};

const update = async (req: any, res: any) => {
    helpers.doesItExist(Files,"profile_pic",req,res,()=>{
      helpers.doesItExist(Files,"certificate",req,res,()=>{
      helpers.doesItExist(Subjects,"subject",req,res,()=>{
        controller.update(req, res);
      });
    });
  });
};


const login = (req: any, res: any) => {
  res.json("Login Teacher");
};

export default {
  add,
  login,
  list: controller.list,
  get: controller.get,
  main: controller.main,
  update,
  del: controller.del,
};
