const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const token = require('./token')
const cors = require('cors');

app.use(cors())

const routes = require('./routes/index'); 

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use('/api/overview',routes); 

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
