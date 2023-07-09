const { userValidator, handleValidationErrors } = require('../utils/validator');

module.exports = (app, db) => {
  app.get('/users', (req, res) => {
    db.find({}).sort({ name: 1 }).exec((err, users) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ users });
      }
    });
  });

  app.post('/users', userValidator, handleValidationErrors, (req, res) => {

      db.insert(req.body, (err, user) => {
        if (err) {
          app.utils.error.send(err, req, res);
        } else {
          res.status(200).json(user);
        }
      });
    }
  );

  app.get('/users/:id', (req, res) => {
    db.findOne({ _id: req.params.id }).exec((err, user) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user);
      }
    });
  });

  app.put('/users/:id', (req, res) => {
    db.update({ _id: req.params.id }, req.body, (err) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(Object.assign(req.params, req.body));
      }
    });
  });

  app.delete('/users/:id', (req, res) => {
    db.remove({ _id: req.params.id }, {}, (err) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(req.params);
      }
    });
  });
};
