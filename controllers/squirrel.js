var squirrel = require('../models/squirrel');
// List of all squirrels
exports.squirrel_list = async function(req, res) {
    try{
        thesquirrels = await squirrel.find();
        res.send(thesquirrels);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};

// Handle squirrel create on POST.
exports.squirrel_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: cat create POST');
};
// Handle squirrel delete form on DELETE.
exports.squirrel_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: squirrel delete DELETE ' + req.params.id);
};

exports.squirrel_view_all_Page = async function(req, res) {
    try{
    thesquirrels = await squirrel.find();
    res.render('squirrel', { title: 'squirrel Search Results', results: thesquirrels });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.squirrel_create_post = async function(req, res) {
    console.log(req.body)
    let document = new squirrel();
    document.squirrel_color = req.body.squirrel_color;
    document.squirrel_breed = req.body.squirrel_breed;
    document.squirrel_price = req.body.squirrel_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }

//for a specific squirrel.
exports.squirrel_detail = async function(req, res) {
   console.log("detail" + req.params.id)
   try {
   result = await squirrel.findById( req.params.id)
   res.send(result)
   } catch (error) {
   res.status(500)
   res.send(`{"error": document for id ${req.params.id} not found`);
   }
   };
   
// Handle squirrel update form on PUT.
   exports.squirrel_update_put = async function(req, res) {
   console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
   try {
   let toUpdate = await squirrel.findById( req.params.id)
   // Do updates of properties
   if(req.body.squirrel_color)
   toUpdate.squirrel_color = req.body.squirrel_color;
   if(req.body.breed) toUpdate.cost = req.body.breed;
   if(req.body.price) toUpdate.size = req.body.price;
   let result = await toUpdate.save();
   console.log("Sucess " + result)
   res.send(result)
   } catch (err) {
   res.status(500)
   res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
   }
   };
   // Handle Costume delete on DELETE.
exports.squirrel_delete = async function(req, res) {
   console.log("delete " + req.params.id)
   try {
   result = await squirrel.findByIdAndDelete( req.params.id)
   console.log("Removed " + result)
   res.send(result)
   } catch (err) {
   res.status(500)
   res.send(`{"error": Error deleting ${err}}`);
   }
   };
   
   