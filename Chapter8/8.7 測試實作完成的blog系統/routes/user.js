var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var Comment = mongoose.model('Comment');

exports.register = function(req, res){
    if (req.session.logined) {
		res.redirect('/');
        return;
    }
	res.render('users/register');
};

exports.signin = function(req, res){
    if (req.session.logined) {
		res.redirect('/');
        return;
    }
	res.render('users/signin');
};

exports.signout = function(req, res){
    req.session.logined = false;
	res.redirect('/');
	res.end();
};

exports.forget = function(req, res){
    if (req.session.logined) {
		res.redirect('/');
        return;
    }
	res.render('users/forget');
};

exports.profile = function(req, res){
    if ((!req.session.name) || (!req.session.logined)) {
		res.redirect('/');
        return;
    }
	res.locals.username = req.session.name ;
	res.locals.authenticated = req.session.logined;
	Blog.find({ Username: req.session.name },  function ( err, blogs, count ){
		res.render( 'users/profile', {
			title : 'Blog System',
			blogs: blogs
		});
	});
};

exports.add_article = function(req, res){
    if ((!req.session.name) || (!req.session.logined)) {
		res.redirect('/');
        return;
    }
	res.locals.username = req.session.name ;
	res.locals.authenticated = req.session.logined;
	res.render('users/add_article');
};

exports.modify = function(req, res){
    if ((!req.session.name) || (!req.session.logined)) {
		res.redirect('/');
        return;
    }
	res.locals.username = req.session.name ;
	res.locals.authenticated = req.session.logined;
	res.locals.messageID = req.params.id;
	Blog.find({ _id: req.params.id }, function ( err, blogs, count ){
		res.render( 'users/modify', {
			blogs: blogs
		});
	});		
};

exports.message = function(req, res){
	res.locals.username = req.session.name ;
	res.locals.authenticated = req.session.logined;
	res.locals.messageID = req.params.id;
	Blog.find({ _id: req.params.id }, function ( err, blogs, count ){
		Comment.find({ MessageID: req.params.id }, function ( err, comments, count ){
			res.render( 'users/message', {
				blogs: blogs,
				comments: comments
			});
		});	
	});	
};

exports.del_article = function(req, res){
	Blog.remove({ _id: req.params.id }, function(err) {
		if (err)
			console.log('Fail to delete article.');
		else
			console.log('Done');
	});
	res.redirect('profile');
};

exports.login = function(req, res){
    if ((!req.body.user) || (!req.body.passwd)) {
		res.redirect('register');
        return;
    }
	req.session.name = req.body.user;
	req.session.passwd = req.body.passwd;
	req.session.logined = true;
	res.redirect('/');
};

exports.add = function(req, res){
    if (!req.session.name) {
		res.redirect('/');
        return;
    }
	new Blog({
		Username: req.session.name,
		Article: req.body.Content,
		CreateDate: Date.now()
	}).save( function( err ){
		if (err) {
			console.log('Fail to save to DB.');
			return;
		}
		console.log('Save to DB.');
	});		
	res.redirect('/');
	
};

exports.update = function(req, res){
    if (!req.params.id) {
		res.redirect('/');
        return;
    }
	Blog.update({ _id: req.params.id }, { Article: req.body.Content }, function(err) {
		if (err)
			console.log('Fail to update article.');
		else
			console.log('Done');
	});	
	res.redirect('profile');
	
};

exports.comment = function(req, res){
    if (!req.params.id) {
		res.redirect('/');
        return;
    }
	new Comment({
		Visitor: req.body.Visitor,
		Comment: req.body.Comment,
		MessageID: req.params.id,
		CreateDate: Date.now()
	}).save( function( err ){
		if (err) {
			console.log('Fail to save to DB.');
			return;
		}
		console.log('Save to DB.');
	});		
	res.redirect('/message/'+req.params.id);
	
};
