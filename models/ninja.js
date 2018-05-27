const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninja Schema & Model
const NinjaSchema = new Schema({

  name: {
    type: String,
    required:[true,'Name Field is requied']
  },

  rank: {
    type: String,
  },

  available: {
    type: Boolean,
    default: false
  }


});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
