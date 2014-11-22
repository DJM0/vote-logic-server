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

    votes: {
      collection: 'vote',
      via: 'suggestion'
    },

    total: {
      type: 'integer'
    },

    toJSON: function() {

      var obj = this.toObject();

      Vote.find({ suggestion: obj.id }).exec(function(error, votes) {

        var total = 0;

        for (i in votes) {
          total += votes[i].votes;
        }

        Suggestion.findOne({ id: obj.id }).exec(function(error, suggestion){

          suggestion.total = total;

          suggestion.save(function(error) {
            //console.log(error);
          });

        });

      });

      return obj;

    }

  }

};

