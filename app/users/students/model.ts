import {Client} from 'pg'
import client from '../../util/database';
import { DataTypes, Model } from 'sequelize';

const Students = client.define('Students', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true
    },
    name:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    last_name:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    email:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    phone:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    profile_pic:{
        type:DataTypes.UUID,
        allowNull: false
    },
    interest:{
        type:DataTypes.ARRAY(DataTypes.UUID),
        defaultValue:[]
    }
  }, {
    // Other model options go here
  });

Students.sync({ alter: true });

export default Students;