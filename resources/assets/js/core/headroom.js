export default {
    mounted() {
        this.createHeadroom();
    },
    data() {
        toggle: false
    },
    methods: {
        toggleNavigation() {
            this.toggle = !this.toggle;

            this.toggle ? this.destroyHeadroom() : this.createHeadroom();
        },
        createHeadroom() {
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navigation__button").style.top = "2.6rem";
                    document.getElementById("navigation__background").style.top = "2.6rem";
                } else {
                    document.getElementById("navigation__button").style.top = "-10rem";
                    document.getElementById("navigation__background").style.top = "-10rem";
                }
                prevScrollpos = currentScrollPos;
            }
        },
        destroyHeadroom() {
            prevScrollpos = window.onscroll = '';
        }
    }
}