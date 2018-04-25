const movieRouters = require('express').Router();

// Require Movie model in our routes module
var Movie = require('../models/Movie');

// Defined store route
movieRouters.route('/add').post((req, res, next) => {
    var item = new Movie(req.body);
    item.save()
    .then(item => {
      res.status(200).json(item);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  });

movieRouters.route('/addall').post((req, res, next) => {
  let data = req.body
  let count = 0
  for (let i = 0; i < data.length; i++) {
    let item = new Movie(data[i])
    item.save().then((item => {
      count++
      if (count === data.length) {
        res.status(200).send('save all ok !')
      }
    }))
  }
});

movieRouters.route('/').get((req, res) => {
  console.log('get movie list');
    Movie.find((err, items) => {
      if(err){
        res.status(200).send('failed')
        console.log(err);
      }
      else {
        console.log(items.length);
        res.json(items);
      }
    })
});

movieRouters.route('/movie/:title').get(function (req, res) {
  var title = req.params.title;
  Movie.find({slug: title}, function (err, item){
      res.json(item);
  });
});

movieRouters.route('/relate/:genre').get(function (req, res) {
  var genre = req.params.genre;
  console.log(genre, '------------------');
  Movie.find({genres: genre}).limit(6).exec(function (err, items) {
    res.json(items);
  })
});

// Defined delete | remove | destroy route
movieRouters.route('/delete/:id').get(function (req, res) {
    Movie.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

movieRouters.route('/:pageNumber/:pageSize').get((req, res) => {
  Movie.count({}, function( err, count){
    let pageSize = parseInt(req.params.pageSize)
    let pageNumber = parseInt(req.params.pageNumber)
    Movie.paginate({}, { page: pageNumber, limit: pageSize }).then((result) => {
      if (err) res.json(err)
      else res.json(result) 
    });
  })
})

module.exports = movieRouters;
