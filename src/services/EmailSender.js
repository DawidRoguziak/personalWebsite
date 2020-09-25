const nodemailer = require("nodemailer");

class EmailSender {
    constructor(formData) {
        this.message = {
            from: `${formData.email} <${process.env.MAIL_LOGIN}>`,
            to: process.env.MAIL_TO,
            subject: formData.title,
            text: formData.message,
            html: `<pre>${formData.message}</pre>`,
        };

        this.transporter = nodemailer.createTransport({
            host: "SMTP.office365.com",
            port: 587,
            tls: {
                // ciphers:'SSLv3'
                rejectUnauthorized: false,
            },
            secure: false,
            auth: {
                user: process.env.MAIL_LOGIN,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        this._error = null;
        this._success = null;
        this._notify = null;
    }

    getResult() {
        return {
            success: this._success,
            error: this._error,
            notify: this._notify
        }
    }

    sendMail() {
        this._success = null;
        this._error = null;

       return new Promise ((resolve) => {
           this.transporter.sendMail(this.message, (error, info) => {
               if (error) {
                   this._success = false;
                   this._error = error;
                   this._notify = 'Something went wrong!!!';
                   resolve(this.getResult());
                   return;
               }

               this._success = true;
               this._error = null;
               this._notify = 'Thanks for  your message!!!';
               resolve(this.getResult());
           });
       });
    }

}

module.exports = EmailSender;