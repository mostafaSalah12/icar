var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/geyushiDB', { useNewUrlParser: true });

module.exports={
    mongoose
};
