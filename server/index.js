const express = require('express');

const postsRouter = require('./routes/posts-routes');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', postsRouter);

app.listen(PORT, () => {
	console.log('server started on port! ' + PORT);
});
