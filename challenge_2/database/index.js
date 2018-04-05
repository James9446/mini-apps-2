const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to mongoDB')
});

var userSchema = mongoose.Schema({
  email: {
    type: mongoose.Schema.Types.String,
    unique: true
  },
  name: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zip: Number,
  phone: Number,
  card: Number,
  exp: String,
  cvv: Number,
  billing: Number
});

var UserModel = mongoose.model('UserModel', userSchema);

let methods = {
    save: (obj) => {
      let userDocument = new UserModel({
        quantity: obj.quantity,
        description: obj.description
      })
      userDocument.save(function (err) {
        if (err) return console.error(err);
      });
    },
    find: (callback) => {
      UserModel.find(callback);
    },
    
    findItem: (body, callback) => {
      UserModel.find(callback).where('description').equals(body.description);
      // return data;
    },
    update: (body, callback) => {
      var query = { description: body.description };
      Model.update(query, { quantity: body.quantity }, options, callback)
    }
  }

  module.exports.methods = methods;
