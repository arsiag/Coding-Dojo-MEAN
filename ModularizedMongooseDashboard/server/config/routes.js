var dogs = require('../controllers/dogs.js');

// module.exports = function(app) {
//     // root - all dogs
//     app.get('/', function(req, res) {
//         dogs.index(req, res);
//     });
//     // New
//     app.get('/dogs/new', function(req, res) {
//         dogs.new(req, res);
//     });
//     // Create
//     app.post('/dogs', function(req, res) {
//         dogs.create(req, res);
//     });
//     // Show
//     app.get('/dogs/:id', function(req, res) {
//         dogs.show(req, res);
//     });
//     // Edit
//     app.get('/dogs/:id/edit', function(req, res){
//         dogs.edit(req, res);
//     });
//     // Update
//     app.post('/dogs/:id', function(req, res){
//         dogs.update(req, res);
//     });
//     // Delete
//     app.post('/dogs/destroy/:id', function(req, res){
//         dogs.destroy(req, res);
//     });
// }

module.exports = app => {
    app
      .get('/', dogs.index)
      .get('/dogs/new', dogs.new)
      .get('/dogs/:id', dogs.show)
      .get('/dogs/:id/edit', dogs.edit)
      .post('/dogs', dogs.create)
      .post('/dogs/:id', dogs.update)
      .post('/dogs/destroy/:id', dogs.destroy);
};