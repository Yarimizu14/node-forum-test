var api   = require('../node_modules/myModel/access_api')
  , async = require('async');
/*
 * GET forum page 
 */
exports.all = function(req, res){
    api.getAllCallback = function(api_back) {
        console.log("this is override");
        var data = {
            title : "thread list",
            list  : api_back.yarimizu
        };
        console.log(data);
        res.render('list', data);
    };
    api.getAll();
};

exports.single =  function(req, res){
   var title = req.params.title;
   api.getSingleCallback = function(api_back) {
       console.log("this is override");
        var data = {
            title : "thread",
            thread_title : title,
            list  : api_back.yarimizu
        };
        res.render('thread', data);
   };
   api.getSingle(title);
};
