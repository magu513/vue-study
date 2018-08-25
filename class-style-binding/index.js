const vm = new Vue({
    el: "#app",
    data: {
        isActive: true,
        hasError: false,
        error: null,
        classObject: {
            active: true,
            'text-danger': false
        }
    },
    computed: {
        classObject2: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});
