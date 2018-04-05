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
  zip: String,
  phone: String,
  card: String,
  exp: String,
  cvv: String,
  billing: String
});

var UserModel = mongoose.model('UserModel', userSchema);

let methods = {
    save: (obj) => {
      let userDocument = new UserModel({
        email: obj.userInfo.email,
        name: obj.userInfo.name,
        password: obj.userInfo.password,
        line1: obj.shippingInfo.line1,
        line2: obj.shippingInfo.line2,
        city: obj.shippingInfo.city,
        state: obj.shippingInfo.state,
        zip: obj.shippingInfo.zip,
        phone: obj.shippingInfo.phone,
        card: obj.creditInfo.card,
        exp: obj.creditInfo.exp,
        cvv: obj.creditInfo.cvv,
        billing: obj.creditInfo.billing
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
