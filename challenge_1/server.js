const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static('dist'))
// app.use('/static', express.static(path.join(__dirname, 'dist')))
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })


app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

