var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    biba: {
      name: 'Biba',
      age: 25,
      description: 'Loves Boba bcs its hes bro',
    },
    boba: {
      name: 'Boba',
      age: 28,
      description: 'Likes playing with Biba bcs its his bro too',
    }
  });
});

module.exports = router;
