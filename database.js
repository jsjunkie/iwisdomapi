module.exports.getWisdom = function(db, callback, errorCallback) {
	var collection = db.collection('Wisdom');

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
	var collection = db.collection('Wisdom');

	collection.insert(data, function (err, result) {
		if (err) {
			errorCallback(err);
			return;
		}

		callback(result);
	});
}

module.exports.editWisdom = function (db, data, callback, errorCallback) {
	var collection = db.collection('Wisdom');

	collection.updateOne({_id: data.key}, { $set: { title: data.title, description: data.description }}, function (err, result) {
		if (err) {
			errorCallback(err);
			return;
		}

		callback(result);
	});
}
