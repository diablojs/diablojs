const model = require('../diablo/model')

let schema = new model.Schema({
    firstName: String,
    lastName: String
});

let User = model.model("User", schema);

module.exports = User; 