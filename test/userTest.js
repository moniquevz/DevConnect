const assert = require ('chai').assert;
const user = require ('../routes/api/users');

const User = require("../models/User");


describe('User', function () {
    describe('#save()', function () {
      it('should save without error', function () {
        var user = new User(req.body);
        user.save();
      });
    });
  });