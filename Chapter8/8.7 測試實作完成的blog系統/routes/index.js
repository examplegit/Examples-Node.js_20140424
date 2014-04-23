var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

exports.index = function(req, res){
	res.locals.username = req.session.name ;
	res.locals.authenticated = req.session.logined;
	Blog.find( function ( err, blogs, count ){
		res.render( 'index', {
			title : 'Blog System',
			blogs: blogs
		});
	});
};