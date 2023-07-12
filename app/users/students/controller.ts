import { Controller } from "../../util/generic.controller";
import helpers from "../../util/helpers";
import Students from "./model";
import crypto from "crypto";
const context_class = Students;
const context = " Students";
const controller = new Controller(context_class);

const add = async (req: any, res: any) => {
  try {
    for (var i = 0; i < req.body.interest.length; i++) {
      await context_class.findByPk(req.body.interest[i]).catch(() => {
        throw "Interest Subject not found";
      });
    }

    /*
    Verify existence of profile pic in the system*/
    for (var a = 0; a < req.body.profile_pic.length; a++) {
      await context_class.findByPk(req.body.profile_pic).catch(() => {
        throw "Profile Picture not found";
      });
    }

    controller.add(req, res);
  } catch (error) {
    res.json({ error });
  }
};
const login = (req: any, res: any) => {
  res.json("Login Student");
};

export default {
  add,
  login,
  list: controller.list,
  get: controller.get,
  main: controller.main,
  update: controller.update,
  del: controller.del,
};
