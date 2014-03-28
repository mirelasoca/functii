
/*
 * GET about page.
 */

var about = function(req, res){
  res.render('about', { title: 'information'});
};
 module.exports = about;