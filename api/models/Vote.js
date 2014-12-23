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
      min: 1,
      max: 3,
      defaultsTo: 1
    },

    ip: {
      type: 'string'
    },

    email: {
      type: 'string'
    }

  }

};

