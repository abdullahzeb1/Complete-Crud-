const hello = require('express');
const mongoose = require('mongoose');
const app = hello();
const routes = require('./Routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 5000;
app.use(cors());
//Connecting Database
mongoose.connect('mongodb://127.0.0.1:27017/Final47', {
  useNewUrlParser: true,
});
// for checking database connection
mongoose.connection.once('open', () => {
  console.log('Database Connected successfully');
});
app.use(bodyParser.json());
//routing
app.use('/', routes);
//for connecting the port
app.listen(PORT, () => {
  console.log('Port is connected at ' + PORT);
});
