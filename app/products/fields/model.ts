import {Client} from 'pg'
import client from '../../util/database';
import { DataTypes, Model } from 'sequelize';
import Subjects from '../subjects/model';

const Fields = client.define('Fields', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true,
      unique:true,
    },
    subject: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name:{
        type:DataTypes.TEXT,
        unique:true,
    },
    definition:{
        type:DataTypes.TEXT,
        unique:true,
        allowNull: false
    },
  }, {
    // Other model options go here
  });

  Subjects.hasMany(Fields, {
    foreignKey: "subject",
    sourceKey:'id'
  });

  Fields.sync({ alter: true });

export default Fields;