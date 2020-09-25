const express = require("express");
const router = express.Router();
const EmailSender = require('./../services/EmailSender')
const GoogleRecaptcha = require('./../services/GoogleRecaptcha')

router.post("/", async (req, res) => {

    const email = req.body.email || null;
    const title = req.body.title || null;
    const message = req.body.message || null;
    const token = req.body.token || null;

    if (!email || !title || !message || !token) {
        res.send({success: false, error: null, notify: 'Missing data'});
    }

    const googleRecaptcha = new GoogleRecaptcha(token);
    const isHuman = await googleRecaptcha.checkToken()
    if(!isHuman) {
        res.send({success: false, error: null, notify: 'You are not a human!!!'});
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
