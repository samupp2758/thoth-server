import Subjects from "./model";
import helpers from "../../util/helpers";
import crypto from "crypto";
import { Controller } from "../../util/generic.controller";
const context_class = Subjects;
const controler = new Controller(context_class);

export default {
  list:controler.list,
  get:controler.get,
  main: controler.main,
  add: controler.add,
  update: controler.update,
  del: controler.del,
};
