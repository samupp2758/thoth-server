import { Model, ModelCtor } from "sequelize";

const format = (str: string, regex: RegExp, message?: string | undefined) => {
  var result = "";

  if (str.trim() != "" && !regex.test(str)) {
    result = str;
  } else {
    throw "Error: " + (message ? message : "field") + " is invalid!";
  }

  return result;
};

//Verify if the body is acceptable
const formatBody = (obj: any, body: any, regexp: RegExp) => {
  try {
    var keys = Object.keys(body);
    for (var i = 0; i < keys.length; i++) {
      if (obj[keys[i]] == null && typeof body[keys[i]] != "object") {
        obj[keys[i]] = format(body[keys[i]], regexp, keys[i]);
      } else if (typeof body[keys[i]] == "object") {
        var keys_ = Object.keys(body[keys[i]]);
        obj[keys[i]] = [];
        for (var a = 0; a < keys_.length; a++) {
          obj[keys[i]][a] = format(body[keys[i]][a], regexp, keys_[a]);
        }
      }
    }
    return obj;
  } catch (er: any) {
    console.log(er);
    var error = er.message ? er.message : er;
    throw { error };
  }
};

//Function that verifies in the context Model if variable "field" as a pk exists in the talble
const doesItExist = async (
  context: ModelCtor<Model<any, any>>,
  field: any,
  req: any,
  res: any,
  next: any,
  isInParams?: boolean | false
) => {
  try {
    var obj = [];
    if (isInParams) {
      obj = req.params;
    } else {
      obj = req.body;
    }
    if (typeof obj[field] == "undefined") {
      next();
      return 0;
    }else if (typeof obj[field] == "string") {
      var _ = await context.findByPk(obj[field]).catch((error) => {
        throw field + " not found";
      });
      if (_?.dataValues.length != 0 && _ != undefined) {
        next();
      } else if (_ != undefined || _ == null) {
        throw field + " not found";
      }
    } else if (typeof obj[field] == "object") {
      for (var i = 0; i < obj[field].length; i++) {
        var _ = await context.findByPk(obj[field][i]).catch(() => {
          throw field+" not found";
        });
        if (_?.dataValues.length == 0 || _ == undefined || _ == null) {
          throw field + " not found";
        }
      }
      next()
    }
  } catch (error) {
    res.json({ error });
  }
};

const variables = {
  regexp: /[^a-zA-Z0-9\s,.À-ú!()#+@-]/,
};

export default { format, variables, formatBody, doesItExist };
