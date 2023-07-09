import helpers from "../../util/helpers";
import Students from "./model";
import crypto from "crypto";
const context_class = Students;
const context = " Students";

const main = (req: any, res: any) => {
  return res.json("");
};

const add = async (req: any, res: any) => {
  try {
    req.body = helpers.formatBody(
      {
        id: crypto.randomUUID(),
      },
      req.body,
      helpers.variables.regexp
    );

    /*
    TODO:

    Verify existence of interest
    Verify existence of profile pic in the system
    */

    context_class
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
  } catch (er) {
    res.json(er);
  }
};

const del = async (req: any, res: any) => {
  var response = await context_class.destroy({
    where: { id: req.params.id },
  });

  res.json({ response });
};

const update = async (req: any, res: any) => {
  try {
    var keys = Object.keys(req.body);
    req.body = helpers.formatBody({}, req.body, helpers.variables.regexp);


    /*
    TODO:

    Verify existence of interest
    Verify existence of profile pic in the system
    */
   

    await context_class
      .update(req.body, {
        where: { id: req.params.id },
      })
      .then(async (response) => {
        res.json({
          object: await context_class.findByPk(req.params.id),
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
  } catch (er) {
    res.json(er);
  }
};

const get = async (req: any, res: any) => {
  var response = await context_class.findByPk(req.params.id);
  res.json(response);
};

const list = async (req: any, res: any) => {
  var response = await context_class.findAll();
  res.json(response);
};

const login = (req: any, res: any) => {
  res.json("Login Student");
};

export default { main, add, del, update, get, list, login };
