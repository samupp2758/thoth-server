import {Client} from 'pg'
import client from '../../util/database';
import { DataTypes, Model } from 'sequelize';

const Fields = client.define('Fields', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true
    },
    subject: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name:{
        type:DataTypes.TEXT
    },
    definition:{
        type:DataTypes.TEXT
    },
  }, {
    // Other model options go here
  });

  Fields.sync({ alter: true });

export default Fields;