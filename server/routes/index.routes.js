const AuthurtController = require('../controllers/index.controller');
module.exports = function(app){
  
   // app.post('/new', AuthurtController.create);
    //app.get('/', AuthurtController.getAll );

    app.post('/api/author',AuthurtController.create);
    app.get('/api/author',  AuthurtController.getAll);



    app.get("/api/authors/",AuthurtController.getAll);
     app.put('/edit/:id',AuthurtController.update );
    app.delete('/delete/:id',AuthurtController.delete);
    app.get('/one/:id',AuthurtController.getAuthor);


}

