const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const mongoose = require('mongoose');
const schema = require('./schema/schema');

mongoose.connect(
	'mongodb+srv://Rishabh:test@123@cluster0-ubjby.mongodb.net/gql-ninja?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
	console.log('connected to DB');
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen(4000, () => {
	console.log('Listening to port 4000');
});
