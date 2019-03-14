const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//User login schema For Mongo database
const UserSchema = new mongoose.Schema({
  //E-Mail variable
  email: {
    type: String,
    default: ''
  },
  //Password variable
  password: {
    type: String,
    default: ''
  },
  //Is the user deleted variable
  isDeleted: {
    type: Boolean,
    default: false
  },
  //Date of user sign-up
  signUpDate: {
    type: Date,
    default: Date.now()
  }
});

//Password encryption
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//Password validation
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', UserSchema);
