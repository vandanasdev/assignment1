const express = require('express');

const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000, function(){
    console.log('App started on port 3000');
});

