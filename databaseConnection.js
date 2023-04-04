const database = require("mongoose"); 
const is_qoddi = process.env.IS_QODDI || false;
const databaseName = "lab_example";

const qoddiURI = 
"mongodb+srv://QubeQode:S1USCOwsauuk0jlk@cluster0.tnk74fa.mongodb.net/lab_example?retryWrites=true&w=majority";

const localURI = "mongodb://127.0.0.1/lab_example?authSource=admin&retryWrites=true&w=majority"


if (is_qoddi) { 
	database.connect(qoddiURI, {
		useNewUrlParser: true, 
		useUnifiedTopology: true
	}); 
} else { 
	database.connect(localURI, {
		useNewUrlParser: true, 
		useUnifiedTopology: true
	});
}

module.exports = database
