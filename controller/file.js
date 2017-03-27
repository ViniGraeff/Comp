var fs = require('fs');
module.exports = {
	read: function(callback){
		fs.readFile(__dirname + "/../"+ "db/produtos.json", "utf8", function(err, data){
			if(err)
				return console.log(err);
			data = JSON.parse(data);
			callback(data);
		});
	}
}