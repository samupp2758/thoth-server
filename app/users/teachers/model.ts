import { Client } from "pg";
import client from "../../util/database";
import { DataTypes, Model } from "sequelize";

const Teachers = client.define(
  "Teachers",
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
    },
    subject:{
        type: DataTypes.UUID,
        allowNull: false,
    },
    certificate: {
      type: DataTypes.UUID,
      allowNull: false,
    },active:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
  }},
  {
    // Other model options go here
  }
);

Teachers.sync({ force: true });

export default Teachers;
