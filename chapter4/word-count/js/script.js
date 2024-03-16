const text = document.querySelector("#text");
const count = document.querySelector("#count");

text.addEventListener("keyup", () => {
    count.textContent = text.value.length;
    // もし入力された文字数（text.value）が100文字を超えたなら
    if (text.value.length > 100) {
    // カウント（count）に.alertを付与する
    count.classList.add("alert");
    } else {
    count.classList.remove("alert");
    }
});
