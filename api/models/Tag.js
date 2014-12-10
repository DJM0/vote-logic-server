/**
* Tag.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    tag: {
      type: 'string',
      required: true,
      minLength: 2
    },

    colour: {
      type: 'string',
      required: true,
      minLength: 6
    },

    suggestions: {
      collection: 'suggestion',
      via: 'tags',
      dominant: true
    },

  }
};

