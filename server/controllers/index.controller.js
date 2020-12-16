const Author = require("../models/author.models");

class authorController {

// gitAll(req, res){
//     Author.find({}).then(authors => res.json(authors))
//     .catch(err => res.json(err));

    

// }

// getAll(req, res) {
//     // how we structure our res.json will be how it looks in the front-end
//     Author.find({})
//         .then(Authors => res.json(Authors))
//         //.then(allAuthors => res.json({ authors: allAuthors }))
//         .catch(err => res.json(err));
// }
getAll (req, res)  {
   
        // how we structure our res.json will be how it looks in the front-end
        Author.find({})
            .then(authors => res.json(authors))
            .catch(err => res.json(err));
    }

  create(req, res) {
    // when creating the err object can contain validation errors!
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.json(err));
}
 delete (req, res){

    Author.deleteOne( {id: req.params._id})
    .then(() => res.json({msg: "ok"}))
            .catch(err => res.json(err));
 }

 update(request, response){
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}
getAuthor(request, response) {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

}

 module.exports = new authorController();