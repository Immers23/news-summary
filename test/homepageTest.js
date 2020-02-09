var expect = require('chai').expect;
var request = require('request');
let chai = require('chai');
let app = require('../app');
let should = chai.should();

describe('Homepage feature test', function() {

  it('Homepage content test', function() {
    request('http://localhost:8080' , function(error, response, body) {
      // console.log(body)
      // expect(res.text.should.be.eql('test'))
      expect(body).to.equal('This is a test pageaa');

      // done();
    });
  });
});

// function homePageTesting(){
//   request('http://localhost:8080' , function(error, response, body) {
//       expect(body).to.equal('Hello World');
//       done();
//   assert.isTrue(expect(response.send).to.equal('This is a test page'))
// });
// homePageTesting();
//
// };


// function testIsString(){
//   let n = new Note("Hello World")
//   let t = n.text
//   assert.isTrue(typeof t === 'string')
//   assert.isTrue(n.text === "Hello World")
// };
// testIsString();



  // it('Homepage status test', function (done) {
  //   request('http://localhost:8080', function (error, response, body) {
  //     expect(response.statusCode).to.equal(200);
  //     done();
  //   });
  // });
