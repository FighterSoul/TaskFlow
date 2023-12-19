const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://hediabdessalem:zJWlgjMWOeEy94pa@cluster0.bqypxiz.mongodb.net/task-manager?retryWrites=true&w=majority';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
