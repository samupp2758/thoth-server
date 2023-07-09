import Subjects from "./model";
import helpers from "../../util/helpers";
import crypto from "crypto";
const context_class = Subjects;
const context = " Subjects";

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
  } catch (error) {
    res.json({error});
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
  } catch (error) {
    res.json({error});
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

export default { main, add, del, update, get, list };
