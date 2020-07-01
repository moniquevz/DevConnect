const assert = require('chai').assert;
const app = require('../App');
const { default: Navbar } = require('../components/layout/Navbar');

describe('App', function(){
    it('app should return Navbar', function(){
        assert.equal(app(), Navbar);
    })
})