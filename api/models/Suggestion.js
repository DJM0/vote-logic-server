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

    authorEmail: {
      type: 'STRING',
      required: true,
      minLength: 10
    },

    votes: {
      collection: 'vote',
      via: 'suggestion'
    }

  }

};

