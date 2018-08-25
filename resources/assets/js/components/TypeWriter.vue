<template>
    <vue-typed-js
        :strings="text"
        :showCursor="false"
        :typeSpeed="speed"
        :contentType="'html'"
        :startDelay="delay"
        @onStop="hideCursor()"
    >
        <h1 class="typing"></h1>
    </vue-typed-js>
</template>

<script>
    import { VueTypedJs } from 'vue-typed-js';
    Vue.use(VueTypedJs);

    export default {
        props: {
            text: Array,
            speed: Number,
            delay: Number
        },

        data: {
            withCursor: false
        },

        methods: {
            hideCursor() {
                this.withCursor = false;
                alert('Hide cursor! = ' + this.withCursor);
            }
        },

        // watch: {
        //     hideCursor() {
        //         this.withCursor = false;
        //         alert('Hide cursor on watch! = ' + this.withCursor);
        //     }
        // },

        mounted() {
            // alert('Example component mounted.');
            console.log('Component mounted.')
        }
    }
</script>
