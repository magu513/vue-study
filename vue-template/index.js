const app = new Vue({
    el: "#app",
    data: {
        msg: "Hello World"
    }
});

const app2 = new Vue({
    el: "#app-2",
    data: {
        msg: "Once only"
    }
});

const app3 = new Vue({
    el: "#app-3",
    data: {
        rawHtml: '<span style="color: red">This should be red.</span>'
    }
});
