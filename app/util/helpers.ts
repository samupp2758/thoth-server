const format = (str: string, regex: RegExp, message?: string | undefined) => {
  var result = "";

  if (str.trim() != "" && !regex.test(str)) {
    result = str;
  } else {
    throw "Error: " + (message ? message : "field") + " is invalid!";
  }

  return result;
};

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
    var error = er.message ? er.message : er ;
    throw { error };
  }
};

const variables = {
  regexp: /[^a-zA-Z0-9\s,.À-ú!()#+@-]/,
};

export default { format, variables, formatBody };
