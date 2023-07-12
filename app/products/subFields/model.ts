import {Client} from 'pg'
import client from '../../util/database';
import { DataTypes, Model } from 'sequelize';

const SubFields = client.define('SubFields', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true
    },
    field: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    definition:{
        type:DataTypes.TEXT,
        allowNull: false
    },
  }, {
    // Other model options go here
  });

  SubFields.sync({ alter: true });

export default SubFields;