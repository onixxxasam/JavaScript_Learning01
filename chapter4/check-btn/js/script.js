const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
    // // もしチェックボックスにチェックが入っていたら
    // if(isAgreed.checked) {
    //     // ボタンを有効化する
    //     btn.disabled = false;
    // // そうでないなら ボタンを無効化する
    // } else {
    //     btn.disabled = true;
    // }

    // ↓リファクタリング

    btn.disabled = !isAgreed.checked;
});