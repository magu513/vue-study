// Vueインスタンスが作成されると、インスタンス自身のdataオブジェクトのすべてのプロパティをリアクティブシステムに追加する。
// 値の変化が発生するたびに、表示が変更後の値へ変化する。
const data = { foo: 'bar'};
const vm = new Vue({
    el: '#app',
    data: data
});

// 定義直後にリアクティブとなるため、動的にプロパティを追加した時、
// 追加したプロパティはリアクティブにならない
// vm.bar = 'buz';
// 定義後に必要ならば、プロパティを定義し初期値を設定しておく必要がある。

// $watchはこの場合vm.foo (vm.$data.foo)が変化する時に呼ぶ関数を設定する
vm.$watch('foo', (n, o) => { console.log('newValue: ' + n + ', oldValue: ' + o) });


// 不変オブジェクトのパターン
const obj = Object.freeze({foo: 'bar'});
new Vue({
    el: '#app2',
    data: obj
});
