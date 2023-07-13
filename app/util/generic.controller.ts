import { Model, ModelCtor } from "sequelize";
import helpers from "./helpers";
import crypto from "crypto";

export class Controller {
  context_class: ModelCtor<Model<any, any>>;

  constructor(cntx: ModelCtor<Model<any, any>>) {
    this.context_class = cntx;
  }

  main = (req: any, res: any) => {
    return res.json("");
  };

  add = async (req: any, res: any) => {
    try {
      req.body = helpers.formatBody(
        {
          id: crypto.randomUUID(),
        },
        req.body,
        helpers.variables.regexp
      );

      this.context_class
        .create(req.body)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          var response = "";
          for (var i = 0; i < err.errors.length; i++) {
            response = response + "" + err.errors[i].message + " ";
          }
          res.json({ response });
        });
    } catch (error) {
      res.json({ error });
    }
  };

  del = async (req: any, res: any) => {
    try {
      var response = await this.context_class
        .destroy({
          where: { id: req.params.id },
        })
        .catch((error) => {
          throw "Invalid id"
        });

      res.json({ response });
    } catch (error) {
      res.json({ error });
    }
  };

  update = async (req: any, res: any) => {
    try {
      var keys = Object.keys(req.body);
      req.body = helpers.formatBody({}, req.body, helpers.variables.regexp);

      await this.context_class
        .update(req.body, {
          where: { id: req.params.id },
        })
        .then(async (response) => {
          res.json({
            object: await this.context_class.findByPk(req.params.id),
            response,
          });
        })
        .catch((err) => {
          var response = "";
          for (var i = 0; i < err.errors.length; i++) {
            response = response + "" + err.errors[i].message + " ";
          }
          res.json({ response });
        });
    } catch (error) {
      res.json({ error });
    }
  };

  get = async (req: any, res: any) => {
    try {
      var response = await this.context_class
        .findByPk(helpers.format(req.params.id, helpers.variables.regexp))
        .catch((error) => {
          throw "Invalid id";
        });
      if (response == null) {
        throw "Invalid id";
      }
      res.json(response);
    } catch (error) {
      res.json({ error });
    }
  };

  list = async (req: any, res: any) => {
    var response = await this.context_class.findAll();
    res.json(response);
  };
}
