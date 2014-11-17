/**
* Suggestion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    suggestion: {
      type: 'STRING',
      required: true,
      minLength: 5
    },

    description: {
      type: 'STRING',
      required: true,
      minLength: 5
    },

    votes: {
      type: 'INTEGER'
    },

    authorEmail: {
      type: 'STRING',
      required: true,
      minLength: 10
    }

  }

};

