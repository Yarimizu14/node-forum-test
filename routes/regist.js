var api = require('../node_modules/myModel/access_api');
/*
 * GET forum page 
 */
exports.show = function(req, res){
    res.render('regist', { title: 'Express' });
}

exports.regist = function(req, res){
    var title    = req.param('title');
    var contents = req.param('contents');
    console.log(title);
    console.log(contents);
    api.regist(title, contents);
    res.render('index', { title: 'Express' });
};
