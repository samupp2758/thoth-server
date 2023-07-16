import { Client } from "pg";
import client from "../../util/database";
import { DataTypes, Model, Sequelize } from "sequelize";
import Files from "../../products/files/model";
import Subjects from "../../products/subjects/model";

const Students = client.define(
  "Students",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    profile_pic: {
      type: DataTypes.UUID,
      allowNull: false,
    },interest: {
        type:  DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false
      }
  },
  {
    // Other model options go here
  }
);

Files.hasOne(Students, {
  foreignKey: "profile_pic",
  sourceKey: "id",
});


Students.sync({ alter: true });

export default Students;
