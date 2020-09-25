const express = require("express");
const router = express.Router();
const EmailSender = require('./../services/EmailSender')

router.post("/", (req, res) => {

    const email = req.body.email || null;
    const title = req.body.title || null;
    const message = req.body.message || null;

    if (!email || !title || !message) {
        res.send({success: false, error: null, notify: 'Missing data'});
    }

    const emailSender = new EmailSender({
        email,
        title,
        message
    });

    emailSender
        .sendMail()
        .then((result) => {
            res.send(result);
        });
});

module.exports = router;
