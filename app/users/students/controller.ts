import Students from "./model";

const main = (req: any, res: any) => {
  return res.json("");
};

const add = (req: any, res: any) => {
  res.json("Add Student");
};

const del = (req: any, res: any) => {
  res.json("Delete Student");
};

const update = (req: any, res: any) => {
  res.json("Update Student");
};

const get = async (req: any, res: any) => {
  res.json("Get Student");
};

const list = async (req: any, res: any) => {
  const students = await Students.findAll();
  res.json(students);
};

const login = (req: any, res: any) => {
  res.json("Login Student");
};

export default { main, add, del, update, get, list, login };
