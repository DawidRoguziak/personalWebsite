import Vue from 'vue';
import * as VeeValidate from 'vee-validate';

import { required, email, max } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

Vue.use(VeeValidate, {
    classes: true,
    classNames: {
        valid: 'my-green',
    }
});

extend("required", {
    ...required,
    message: "This field is required"
});

extend("max", {
    ...max,
    message: "This field must be {length} characters or less"
});

extend("email", {
    ...email,
    message: "This field must be a valid email"
});