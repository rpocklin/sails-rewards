/**
 * Test model: RewardsModel.test.js
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @sails docs  :: http://sailsjs.org/documentation/concepts/testing -
 * @chai docs  :: http://chaijs.com/guide/styles/
 * @sinon docs  :: http://sinonjs.org/docs/
 * @supertest  :: https://github.com/visionmedia/supertest
 */
"use strict";

var chai = require('chai');
var assert = chai.assert;
var sinon = require('sinon');
var request = require('supertest');
var expect = chai.expect;

var data = {};
var createdReward;

beforeEach(function(done) {

  // clears all previous rewards and creates one
  Rewards.destroy().exec(function(err) {

    request(sails.hooks.http.app)
      .post(sails.config.blueprints.prefix + '/Rewards')
      .send({
        name : 'test1',
        value: 5
      })
      .expect(302)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        assert.equal(res.headers.location, '/rewards');

        Rewards.find().exec(function(err, rewards) {
          if (err || !rewards.length) {
            return done(err);
          }
          createdReward = rewards[0];
          done();
        });

      });
  });
});

describe('Controller:Rewards', () => {

  describe('POST /Rewards', () => {
    it('Should created new Rewards', done => {
      request(sails.hooks.http.app)
        .post(sails.config.blueprints.prefix + '/Rewards')
        .send({
          name : 'test',
          value: 5
        })
        .expect(302)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          assert.equal(res.headers.location, '/rewards');
          done();
        });
    });
  });

  describe('GET /Rewards', () => {
    it('Should get all Rewards', done => {
      request(sails.hooks.http.app)
        .get(sails.config.blueprints.prefix + '/Rewards')
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  describe('GET /Rewards/:id', () => {
    it('should respond with the requested Rewards:id', done => {

      var id = createdReward.id;

      request(sails.hooks.http.app)
        .get(sails.config.blueprints.prefix + '/Rewards/' + id)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  describe('PUT /Rewards/:id', () => {
    it('should respond updated Rewards', done => {
      var id = createdReward.id;
      request(sails.hooks.http.app)
        .put(sails.config.blueprints.prefix + '/Rewards/' + id)
        .send(data)
        .expect(302)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          assert.equal(res.headers.location, '/rewards/' + id);
          done();
        });
    });
  });

  describe('DELETE /Rewards/:id', () => {
    it('should remove a reward', done => {

      var id = createdReward.id;

      request(sails.hooks.http.app)
        .delete(sails.config.blueprints.prefix + '/Rewards/' + id)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });
})
;

