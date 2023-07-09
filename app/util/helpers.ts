const format = (str: string, regex: RegExp) => {
  var result = "";

  if (str.trim() != "") {
    if (!regex.test(str)) {
      result = str.replace(regex, "");
    } else {
      throw "Invalid String";
    }
  } else {
    throw "Empty String";
  }

  return result;
};

export default { format };
