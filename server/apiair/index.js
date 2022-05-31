const express = require('express');
const userRouter = require('./routes/user-routes');
const postRouter = require('./routes/post-routes');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(PORT, () => {
	console.log('server started on port! ' + PORT);
});
