import {Client} from 'pg'
import client from '../../util/database';
import { DataTypes, Model } from 'sequelize';

const Comments = client.define('Comments', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true
    },
    author:{
      type: DataTypes.UUID,
      allowNull: false,
      onUpdate: "RESTRICT"
    },
    message: {
      type: DataTypes.TEXT
    },
    tot:{
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    // Other model options go here
  });

  Comments.sync({ alter: true });

export default Comments;