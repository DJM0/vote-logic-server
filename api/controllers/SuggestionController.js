/**
 * SuggestionController
 *
 * @description :: Server-side logic for managing suggestions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  vote: function(req, res) {

    if (!req.param('id')) return res.send('No suggestion specified!', 400);
    if (req.param('count') < 1) return res.send('Not enough many votes!', 400);
    if (req.param('count') > 3) return res.send('Too many votes!', 400);

    Suggestion.findOne(req.param('id')).exec(function(err, suggestion){

      if (req.param('count')) {
        suggestion.votes += parseInt(req.param('count'));
      } else {
        suggestion.votes += 1;
      }

      suggestion.save(function (err) {
        if (err) return res.send(err, 500);
        res.json({'suggestion': suggestion });
      });

    });

  }
	
};
