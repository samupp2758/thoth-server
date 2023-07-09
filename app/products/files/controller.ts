import Files from "./model";
import helpers from "../../util/helpers";
import crypto from "crypto";
import multer from "multer";
import path from "path";
import { unlink } from "fs";
const context_class = Files;
const context = " Files";
const dir_ = __dirname + "/uploads/";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir_);
  },
  filename: function (req, file, cb) {
    const name = crypto.randomUUID();
    cb(null, name + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const accepted = [".jpg", ".png", ".jpeg", ".pdf", ".docx", ".doc"];
    var allowed_list = "";
    var ext = path.extname(file.originalname);
    var result = false;
    for (var i = 0; i < accepted.length; i++) {
      allowed_list += accepted[i] + ", ";
      if (ext === accepted[i]) {
        result = true;
      }
    }
    if (!result) {
      cb(null,false);
    } else {
      cb(null, true);

    }
  },
  limits: { fileSize: 6291456, files: 1, fields: 1 },
});
const uploader = upload.array("file", 1);

const main = (req: any, res: any) => {
  return res.json("");
};

const add = async (req: any, res: any,error:any) => {
  try {
    if (req.files.length == 0) {
      throw "No valid files sent";
    }

    context_class
      .create({
        id: req.files[0].filename.split(".")[0],
        name: req.files[0].originalname,
        extension: req.files[0].mimetype.split("/")[1],
        size: req.files[0].size,
      })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        var response = "Error: ";
        for (var i = 0; i < err.errors.length; i++) {
          response = response + "" + err.errors[i].message + " ";
        }
        throw response;
      });
  } catch (error) {
    res.json({ error });
  }
};

const del = async (req: any, res: any) => {
  try {
    var obj = await context_class.findByPk(req.params.id);
    var data = obj?.dataValues;
    if (data == undefined) {
      throw "No file found";
    }
    unlink(dir_ + data.id + "." + data.extension, (err: any) => {
      //console.log(err)
      //throw err;
    });

    var response = await context_class.destroy({
      where: { id: req.params.id },
    });
    res.json({ response });
  } catch (error) {
    res.json({ error });
  }
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
    res.json({ error });
  }
};

const show = async (req: any, res: any) => {
  try {
    const options = {
      root: path.join(__dirname),
    };
    var response = await context_class
      .findByPk(helpers.format(req.params.id, helpers.variables.regexp))
      .catch((error) => {
        throw "Invalid id";
      });

    var data = response?.dataValues;

    if (data == undefined) {
      throw "No file found";
    }

    var fileName = "/uploads/" + data.id + "." + data.extension;

    res.sendFile(fileName, options, function (err: any, next: any) {
      if (err) {
        next(err);
      }
    });
  } catch (error) {
    res.json({ error });
  }
};

const get = async (req: any, res: any) => {
  try {
    var response = await context_class
      .findByPk(helpers.format(req.params.id, helpers.variables.regexp))
      .catch((error) => {
        throw "Invalid id";
      });

    var data = response?.dataValues;

    if (data == undefined) {
      throw "No file found";
    }
    res.json(data)
  } catch (error) {
    res.json({ error });
  }
};

const list = async (req: any, res: any) => {
  var response = await context_class.findAll();
  res.json(response);
};

export default { main, add, del, update, get, list, uploader,show };
