const fetch = require('isomorphic-fetch');

class GoogleRecaptcha {
    constructor(token) {
        this.token = token
        this.link = this.googleCheckLink();
    }

    googleCheckLink() {
        return `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_PRIVATE_KEY}&response=${this.token}`
    }

    checkToken() {
        return fetch(this.link, {method: 'post'})
            .then(response => response.json())
            // .then(response => console.log(response.score );
            .then(response => response.score >= 0.9);
    }
}

module.exports = GoogleRecaptcha;