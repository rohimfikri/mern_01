const mongoose = require('mongoose');

const MyuserSchema = new mongoose.Schema({
  nik: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  birth_date: {
    type: Date
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Myuser = mongoose.model('my_user', MyuserSchema);