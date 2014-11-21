/**
* Vote.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    suggestion: {
      model: 'suggestion',
    },

    votes: {
      type: 'integer',
      defaultsTo: 0,
      min: 0,
      max: 3
    },

    note: {
      type: 'string'
    },

    email: {
      type: 'string'
    }

  }
};

