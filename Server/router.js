const express = require('express')
const router = express.Router();

router.get('/' , ( req , res ) => {
    res.send('server is runnning great')
})


module.exports = router;