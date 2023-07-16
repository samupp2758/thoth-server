import { Client } from "pg";
import client from "../../util/database";
import { DataTypes, Model } from "sequelize";
import Students from "../../users/students/model";
import Teachers from "../../users/teachers/model";
import Tots from "../tots/model";

const Comments = client.define(
  "Comments",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    author: {
      type: DataTypes.UUID,
      allowNull: false,
      onUpdate: "RESTRICT",
    },
    message: {
      type: DataTypes.TEXT,
    },
    tot: {
      type: DataTypes.UUID,
      allowNull: false,
      onUpdate: "RESTRICT",
    },
  },
  {
    // Other model options go here
  }
);

Comments.belongsTo(Students, {
  foreignKey: "author",
  targetKey: "id",
});

Comments.belongsTo(Teachers, {
  foreignKey: "author",
  targetKey: "id",
});

Comments.belongsTo(Tots, {
  foreignKey: "tot",
  targetKey: "id",
});

Comments.sync({ alter: true });

export default Comments;
