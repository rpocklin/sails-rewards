/**
 * Rewards.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id : { type: 'integer,', primaryKey: true,
      autoIncrement: true,
      index: true
      //defaultsTo: function() {
      //  return uuid.v4();
      //}
    },

    'name' : { type: 'string', required: true, unique: true, index: true},

    'value' : { type: 'integer', required: true }
  }

  //validation_messages: {
  //  name: {
  //    required: 'You must supply a valid name for the placement. If you do not have a specific name, make up one.',
  //    minLength: 'The name must be more than one character long.'
  //  },
  //  width: {
  //    required: 'You must supply a width value in pixels.'
  //  },
  //  height: {
  //    required: 'You must supply a height value in pixels.'
  //  },
  //}
};

