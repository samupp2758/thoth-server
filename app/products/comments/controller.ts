import Comments from "./model";
const context_class = Comments;
const context = " Comments";

const main = (req: any, res: any) => {
  return res.json("");
};

const add = (req: any, res: any) => {
  res.json("Add"+context);
};

const del = (req: any, res: any) => {
  res.json("Delete"+context);
};

const update = (req: any, res: any) => {
  res.json("Update"+context);
};

const get = async (req: any, res: any) => {
  res.json("Get"+context);
};

const list = async (req: any, res: any) => {
  const response = await context_class.findAll();
  res.json(response);
};


export default { main, add, del, update, get, list };
