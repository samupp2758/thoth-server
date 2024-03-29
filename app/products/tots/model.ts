import { Client } from "pg";
import client from "../../util/database";
import { DataTypes, Model } from "sequelize";
import SubFields from "../subFields/model";
import Teachers from "../../users/teachers/model";

const Tots = client.define(
  "Tots",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    sub_field: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: { 
      type: DataTypes.UUID, 
      onUpdate: "RESTRICT", 
      allowNull: false },
  },
  {
    // Other model options go here
  }
);

Tots.belongsTo(SubFields,{
  foreignKey:"sub_field",
  targetKey:"id"
})

Tots.belongsTo(Teachers,{
  foreignKey:"author",
  targetKey:"id"
})

Tots.sync({ alter: true });

export default Tots;
