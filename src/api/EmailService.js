const  express = require('express');
const router = express.Router();

router.post('/',  (req, res) => {

   res.send({'ala': 'test'});
});

module.exports = router;