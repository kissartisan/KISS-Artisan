<script>
    export default {
        mounted() {
            this.headRoom(true);
        },
        data() {
            return {
                toggler: true
            }
        },
        computed: {
            toggleState() {
                return this.toggler;
            }
        },
        methods: {
            toggle(toggle) {
                this.toggler = !toggle;

                this.headRoom(this.toggler);
            },
            headRoom(enabled) {
                if (!enabled)
                    return window.onscroll = '';

                var prevScrollpos = window.pageYOffset;
                window.onscroll = function() {
                    var currentScrollPos = window.pageYOffset;
                    if (prevScrollpos > currentScrollPos) {
                        document.getElementById("navigation__button").style.top = "2.6rem";
                        document.getElementById("navigation__background").style.top = "2.6rem";
                    } else {
                        document.getElementById("navigation__button").style.top = "-5rem";
                        document.getElementById("navigation__background").style.top = "-5rem";
                    }
                    prevScrollpos = currentScrollPos;
                }
            }
        }
    }
</script>