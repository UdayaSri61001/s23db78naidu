var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('squirrel', { title: 'Search Results squirrel' });
});
var express = require('express');
const squirrel_controlers= require('../controllers/squirrel');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
/* GET squirrels */
router.get('/', squirrel_controlers.squirrel_view_all_Page );
/* GET detail squirrel page */
router.get('/detail', squirrel_controlers.squirrel_view_one_Page);
/* GET create squirrel page */
router.get('/create', squirrel_controlers.squirrel_create_Page);
/* GET create update page */
router.get('/update',secured, squirrel_controlers.squirrel_update_Page);
/* GET deletesquirrel page */
router.get('/delete',squirrel_controlers.squirrel_delete_Page);
module.exports = router;