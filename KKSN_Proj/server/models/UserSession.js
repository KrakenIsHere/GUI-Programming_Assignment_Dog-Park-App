const mongoose = require('mongoose');

//User session schema for mongo Database
const UserSessionSchema = new mongoose.Schema({
  //Current user session ID
  userId: {
    type: String,
    default: ''
  },
  //Login Time
  timestamp: {
    type: Date,
    default: Date.now()
  },
  //Session has ended / User has logged out
  isDeleted: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model('UserSession', UserSessionSchema);
