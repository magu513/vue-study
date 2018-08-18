const vm = new Vue({
    el: "#example",
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
});
