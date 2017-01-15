/**
 * RewardsController
 *
 * @description :: Server-side logic for managing rewards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function getErrorMessage(err) {
  var keys = Object.keys(err.ValidationError);

  // assumes one main error
  return err.ValidationError[keys[0]][0].message;
}

var CREATE_SUCCESS_MESSAGE = 'Successfully created reward!';
var DELETE_SUCCESS_MESSAGE = 'Successfully deleted reward!';
var UPDATE_SUCCESS_MESSAGE = 'Successfully updated reward!';

var FLASH_MESSAGE_SUCCESS = 'success';
var FLASH_MESSAGE_ERROR = 'error';



module.exports = {

  show: function(req, res) {

    var id = req.params.id;

    return Rewards.findOne(id).exec(function (err, reward) {

      if (err) {
        return res.serverError(err);
      }
      return res.view({
        reward: reward
      });
    });
  },

  list: function (req, res) {

    var rewards = Rewards.find().exec(function (err, rewards) {
      return res.view({
        rewards: rewards
      });
    });
  },

  del: function (req, res) {

    var id = req.params.id;

    return Rewards.destroy(id).exec(function (err) {

      if (err) {
        return res.negotiate(err);
      }

      req.addFlash(FLASH_MESSAGE_SUCCESS, DELETE_SUCCESS_MESSAGE);
      res.redirect('/rewards');
    });
  },

  create: function (req, res) {

    Rewards.create(req.body).exec(function (err, reward) {

      if (err) {
        if (err.ValidationError) {
          var message = getErrorMessage(err);
          req.addFlash(FLASH_MESSAGE_ERROR, message);
          return res.view();

        } else {
          return res.serverError(err);
        }
      }

      req.addFlash(FLASH_MESSAGE_SUCCESS, CREATE_SUCCESS_MESSAGE);
      return res.redirect('rewards');
    });
  },

  update: function (req, res) {

    var id = req.params.id;
    var newValue = req.param('value');

    return Rewards.update(id, {value: newValue}).exec(function (err, updated) {

      if (err) {
        if (err.ValidationError) {
          var message = getErrorMessage(err);
          req.addFlash(FLASH_MESSAGE_ERROR, message);
          return res.redirect('rewards/'+ id);

        } else {
          return res.serverError(err);
        }
      }

      req.addFlash(FLASH_MESSAGE_SUCCESS, UPDATE_SUCCESS_MESSAGE);
      return res.redirect('rewards');
    });
  }
};
