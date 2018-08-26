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

const vm2 = new Vue({
    el: '#app2',
    data: {
        isActive: false,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
});

const vm3 = new Vue({
    el: '#app3',
    data: {
        isActive: true
    }
});

const vm4 = new Vue({
    el: '#app4',
    data: {
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
})
