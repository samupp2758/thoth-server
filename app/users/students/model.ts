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
        type:DataTypes.TEXT
    },
    last_name:{
        type:DataTypes.TEXT
    },
    profile_pic:{
        type:DataTypes.UUID
    },
    interest:{
        type:DataTypes.UUID
    },
    created_time:{
        type:DataTypes.TIME
    },
    updated_time:{
        type:DataTypes.TIME
    }
  }, {
    // Other model options go here
  });

Students.sync({ alter: true });

export default Students;