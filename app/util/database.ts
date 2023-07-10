import { Sequelize } from "sequelize";
require("dotenv").config();

const client = new Sequelize(
  "postgres://" +
    process.env.PGUSER +
    ":" +
    process.env.PGPASSWORD +
    "@" +
    process.env.PGHOST +
    ":" +
    process.env.PGPORT +
    "/" +
    process.env.PGDATABASE
);

try {
    client.authenticate();
    console.log('Connection has been established successfully.');
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }




export default client;

