/*Definition of the function getData for Items. It will be imported on the routes files */

const data = {};

exports.getData = (req, res) => {
    res.send({ data: 'Information coming from Items'});
}
