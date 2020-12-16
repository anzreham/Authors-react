const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Authordb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( ()=> console.log("successfully connected to the Authordb"))
.catch( err => console.log(err))