var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('GET / request received');
	res.render('index', { title: 'Express' });
});

router.get('/api/get/api-get', function(req, res){
	console.log('GET /api/get/api-get request received');
	res.status(200).json({
    	"message" : "get message from nodejs-api get"
        });
 });

 router.post('/api/post/api-post',function(req, res){
	console.log('POST /api/post/api-post request received');
	res.status(200).json({
    	"message" : "get message from nodejs-api post"
    });    
});  

module.exports = router;
