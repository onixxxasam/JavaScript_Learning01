const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    // 選択した色を背景色に設定
    document.body.style.backgroundColor = color.value;
    // カラーコードを表示
    if(color.value === '#ffffff') {
        text.textContent = `カラーコード：${color.value}(white)`;
    } else if(color.value === '#000000') {
        text.textContent = `カラーコード：${color.value}(black)`;
    }
    else {
        text.textContent = `カラーコード：${color.value}`;
    }
}
color.addEventListener('input', colorBg);
// 無名関数を使った書き方
// color.addEventListener('input', () => {
//     text.textContent = `カラーコード：${color.value}`;
// });

//パラメータを使った関数
// const message = (weather, name) => {
//     return `${name}さん こんにちは！今日は${weather}ですね`;
// }
// alert(message('晴れ', 'takashi'));