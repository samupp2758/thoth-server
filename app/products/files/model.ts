import {Client} from 'pg'
import client from '../../util/database';
import { DataTypes, Model } from 'sequelize';

const Files = client.define('Files', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true
    },
    name:{
        type:DataTypes.TEXT
    },
    extension:{
        type:DataTypes.TEXT
    },
    size:{
        type:DataTypes.TEXT
    },
  }, {
    // Other model options go here
  });

  Files.sync({ alter: true });

export default Files;