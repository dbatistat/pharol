import * as mongoose from 'mongoose';

export const PeopleSchema = new mongoose.Schema({
  rut: String,
  rutChilen: Number,
  name: String,
  lastname: String,
  email: String,
  gender: String,
  addresses: [{
    description: String,
  }],
});
