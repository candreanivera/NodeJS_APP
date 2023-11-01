<<<<<<< HEAD
/*Definition of the function getData for Items
  It will be imported on the routes files */

const data = {};

exports.getData = (req, res) => {
    res.send({ data: 'Information coming from Items'});
}
=======
/**Function getData is exported, it must be imported inside the Routes files */

exports.getData = (req, res) => {
    res.send({ data: 'Esto viene desde ITEMS'});
}
>>>>>>> 900b934844dc00e253cf8d82c1837d2aa1124a69
