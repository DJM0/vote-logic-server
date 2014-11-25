/**
* Suggestion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    suggestion: {
      type: 'string',
      required: true,
      minLength: 5
    },

    description: {
      type: 'string',
      required: true,
      minLength: 5
    },

    email: {
      type: 'string',
      required: false
    },

    total: {
      type: 'integer',
      defaultsTo: 0
    },

    votes: {
      collection: 'vote',
      via: 'suggestion'
    },

    notes: {
      collection: 'note',
      via: 'suggestion'
    }

  }

};

