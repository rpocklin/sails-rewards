
/** 
 * Test model: RewardsController.test.js
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @sails docs  :: http://sailsjs.org/documentation/concepts/testing - 
 * @chai docs	:: http://chaijs.com/guide/styles/
 */
"use strict";

var chai = require('chai');
var assert = chai.assert;
var sinon = require('sinon');
var request = require('supertest');
var expect =  chai.expect;

describe('Model:Rewards', () => {

	var createReward = function(onError, onSuccess, data) {
		data = data || { name: 'test', value: 5 };

		Rewards.create(data).exec(function (err, reward) {

			if (err) {
				onError(err);
			}

			Rewards.find().exec(function(err, rewards) {
				onSuccess(rewards);
			});
		});
	};

	beforeEach(function() {
		return Rewards.destroy();
	});

	describe('create()', () => {
		it('should return a record when rewards exists', done => {
			createReward(assert.fail, function(rewards) {
				assert.equal(rewards.length, 1);
				done();
			});
		});
	});

	describe('find()', () => {
		it('should create no record when no rewards exist', done => {
			Rewards.find().exec(function(err, rewards) {
				assert.equal(rewards.length, 0);
				done();
			});
		});
	});

	describe('update()', () => {
		it('should update a record', done => {
			var oldRewardValue;
			var INCREMENT = 5;
			createReward(assert.fail, function(rewards) {
				var reward = rewards[0];
				oldRewardValue = reward.value;

				Rewards.update(reward.id, {value: reward.value + INCREMENT}).exec(function(err, updated) {
					Rewards.findOne(reward.id).exec(function(err, newReward) {
						assert.equal(newReward.value, oldRewardValue + INCREMENT);
						done();
					});
				});
			});
		});
	});

	describe('destroy()', () => {
		it('should destroy a record', done => {
			createReward(assert.fail, function(rewards) {
				assert.equal(rewards.length, 1);

				var reward = rewards[0];

				Rewards.destroy(reward.id).exec(function(err) {
					if (err) {
						assert.fail();
					}
					done();
				});
			});
		});
	});
});

