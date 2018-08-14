const app = new Vue({
    // CSSと同様の属性の指定ができる
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

const app2 = new Vue({
    el: "#app-2",
    data: {
        message: "You loaded this page on" + new Date().toLocaleString()
    }
});

const app3 = new Vue({
    el: "#app-3",
    data: {
        // 出力の有無
        seen: true
    }
});

const app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text: 'Learn JavaScript'},
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js'
    },
    methods: {
        reverseMessage: function() { this.message = this.message.split('').reverse().join('') }
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
const app6 = new Vue({
    el: "#app-6",
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables'},
            { id: 1, text: 'Chees' },
            { id: 2, text: 'Whatever eles humans are supposed to eat' }
        ]
    }
})
