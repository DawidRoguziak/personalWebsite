<template>
    <section id="contact-section">
        <v-row :align="'center'" :justify="'center'" class="full-vh contact-section">
            <v-col cols="12" sm="12" md="12" xl="8" class="contact-form-wrapper">
                <v-row>
                    <v-col cols="12" sm="5" md="5" xl="5" class="contact-form-left relative">
                        <div class="contact-title">
                            <div class="contact-title-text center-item">Contact</div>
                            <s-v-g-media class="contact-title-media"></s-v-g-media>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="7" md="7" xl="7" class="contact-form-right relative">
                        <ValidationObserver ref="emailForm"
                                            v-slot="{ invalid, validated, passes, validate }">
                            <v-row>
                                <v-col>
                                    <ValidationProvider name="Name" rules="required|max:100"
                                                        v-slot="{ errors, valid }">
                                        <v-text-field v-model="formData.email"
                                                      :counter="100"
                                                      :filled="true"
                                                      :error-messages="errors"
                                                      :success="valid"
                                                      :color="'rgba(253, 189, 28, 0.8)'"
                                                      label="Email"
                                                      required
                                        />
                                    </ValidationProvider>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <ValidationProvider name="Name" rules="required|max:50"
                                                        v-slot="{ errors, valid }">
                                        <v-text-field v-model="formData.title"
                                                      :counter="50"
                                                      :filled="true"
                                                      :error-messages="errors"
                                                      :success="valid"
                                                      :color="'rgba(253, 189, 28, 0.8)'"
                                                      label="Title"
                                                      required
                                        />
                                    </ValidationProvider>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <ValidationProvider name="Name" rules="required|max:500"
                                                        v-slot="{ errors, valid }">
                                        <v-textarea v-model="formData.message"
                                                    :counter="500"
                                                    :filled="true"
                                                    :error-messages="errors"
                                                    :success="valid"
                                                    :auto-grow="true"
                                                    :row-height="15"
                                                    label="Message"
                                                    :color="'rgba(253, 189, 28, 0.8)'"
                                                    required
                                        />
                                    </ValidationProvider>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-btn :block="true"
                                           color="rgb(108, 99, 255)">
                                        SEND
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </ValidationObserver>

                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    import SVGMedia from "../components/svg/SVGMedia";
    import {ValidationObserver, ValidationProvider} from 'vee-validate';

    export default {
        name: "ContactSection",
        components: {SVGMedia, ValidationObserver, ValidationProvider},
        data() {
            return {
                formData: {
                    email: '',
                    title: '',
                    message: ''
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .contact-section {
        background: #212121;
        color: #fff;
    }

    .contact-title {
        color: #fafafa;

        .contact-title-text {
            font-size: 30px;
            font-weight: bold;
        }

        .contact-title-media {
            width: 250px;
            position: absolute;
            top: 50%;
            left: 30%;
            transform: translate(-50%,-50%);
        }
    }

    .contact-form-wrapper {
        background: #191919;
        padding: 40px;
    }

    @media (max-width: 1400px) {
        .contact-form-left {
            min-height: 300px;
        }

        .contact-title-media {
            left: 40% !important;
        }

        .contact-title-text {
            left: 70%;
        }

    }
</style>