const format = (str: string, regex: RegExp,message?:string | undefined) => {
  var result = "";

  if (str.trim() != "" && !regex.test(str)) {
    result = str;
  } else {
    throw "Error: "+(message?message:"field")+" is invalid!";
  }

  return result;
};

const formatBody = (obj: any, body: any, regexp: RegExp) => {
  try {
    var keys = Object.keys(body);
    for (var i = 0; i < keys.length; i++) {

      if (obj[keys[i]] == null) {
        obj[keys[i]] = format(body[keys[i]], regexp,keys[i]);
      }
    }
    return obj;
  } catch (er) {
    throw er;
  }
};

const variables = {
  regexp: /[^a-zA-Z0-9\s,.À-ú!()#-]/,
};

export default { format, variables, formatBody };
