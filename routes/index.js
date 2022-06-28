const { json } = require("express");
var express = require("express");
var router = express.Router();
const contact = require('../modal/contact');
const cors = require('cors');
router.use(cors())
const contactController = require('../Controller/ContactController');

router.get("/",contactController.getData);

router.post("/add-contact",contactController.addContact);

router.post("/delete-contact/:id",contactController.deleteContact);

router.post("/update-contact/:id",contactController.updateContact);


router.get("/edit-contact/:id",contactController.oneData);

router.post("/check_phonenumber",contactController.checkNumber);

module.exports = router;
