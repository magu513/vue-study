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

const vm2 = new Vue({
    el: "#demo",
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    // firstName,lastNameの変更を監視する。
    // この場合だと冗長なので、computedを利用した方が良い(大抵はcomputedの方がいいらしい)
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName =  this.firstName + ' ' + val
        }
    }
    /*
    // computedを利用した例。
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
    */
});

const vm3 = new Vue({
    el: "#setter",
    data: {
        firstName: 'Foo',
       lastName: 'Bar'
    },
    computed: {
       fullName: {
           get: function () {
               return this.firstName + ' ' + this.lastName
           },
           set: function (newValue) {
               let names = newValue.split(' ')
               this.firstName = names[0]
               this.lastName = names[1]
           }
       }
    }
});
