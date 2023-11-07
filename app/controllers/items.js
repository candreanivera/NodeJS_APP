/*Definition of the function getData for Items. It will be imported on the routes files */

const data = {};
const http = require('http');
const fs = require('fs');

//Variable that will be used to call the html file
const paginaItems = fs.readFileSync('items.html');

exports.getData = (req, res) => {
    //res.send({ data: 'Information coming from Items'});
    res.end(paginaItems);
}
