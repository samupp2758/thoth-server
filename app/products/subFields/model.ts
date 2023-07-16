import { Client } from "pg";
import client from "../../util/database";
import { DataTypes, Model } from "sequelize";
import Fields from "../fields/model";

const SubFields = client.define(
  "SubFields",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    field: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  },
  {
    // Other model options go here
  }
);

Fields.hasMany(SubFields, {
  foreignKey: "field",
  sourceKey: "id",
});

SubFields.sync({ force: true });

export default SubFields;
