var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('squirrel', { title: 'Search Results squirrel' });
});
var express = require('express');
const squirrel_controlers= require('../controllers/squirrel');
var router = express.Router();
/* GET squirrels */
router.get('/', squirrel_controlers.squirrel_view_all_Page );


/* GET detail squirrel page */
router.get('/detail', squirrel_controlers.squirrel_view_one_Page);
/* GET create squirrel page */
router.get('/create', squirrel_controlers.squirrel_create_Page);
/* GET create update page */
router.get('/update', squirrel_controlers.squirrel_update_Page);
/* GET deletesquirrel page */
router.get('/delete',squirrel_controlers.squirrel_delete_Page);
module.exports = router;