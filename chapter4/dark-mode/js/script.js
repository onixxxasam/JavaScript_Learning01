const body = document.querySelector('body');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if(btn.textContent === 'ダークモードにする')  {
        btn.textContent = 'ライトモードにする';
    } else {
        btn.textContent = 'ダークモードにする';
    }
});