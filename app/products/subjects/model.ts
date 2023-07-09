import {Client} from 'pg'
import client from '../../util/database';
import { DataTypes, Model } from 'sequelize';

const Subjects = client.define('Subjects', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true
    },
    name:{
        type:DataTypes.TEXT,
        unique:true,
        allowNull: false
    },
    definition:{
        type:DataTypes.TEXT,
        unique:true,
        allowNull: false
    },
    imageBG:{
        type:DataTypes.TEXT
    },
    theme:{
        type:DataTypes.TEXT,
        defaultValue:"#000000"
    },
  }, {
    // Other model options go here
  });

Subjects.sync({ alter: true });

export default Subjects;