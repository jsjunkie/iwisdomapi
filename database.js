module.exports.getWisdom = function(db, callback, errorCallback) {
	var collection = db.collection('iWisdom');

	collection.find({}).toArray(function(err, docs){
		if (err) {
			errorCallback(err);
			return;
		}
		console.log(docs);
		callback(docs);
	});
}

module.exports.addWisdom = function (db, data, callback, errorCallback){
	var collection = db.collection('iWisdom');

	collection.insert(data, function (err, result) {
		if (err) {
			errorCallback(err);
			return;
		}

		callback(result);
	});
}
