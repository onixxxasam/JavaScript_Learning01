const getSCrollPercent = () => {
    // スクロールした量
    const scrolled = window.scrollY;
    // ページ全体の高さ
    const pageHeight = document.documentElement.scrollHeight;
    // 画面領域の高さ
    const viewHeight = document.documentElement.clientHeight;

    // console.log(`スクロール量：${scrolled}`)
    // console.log(`ページの高さ：${pageHeight}、表示両機の高さ：${viewHeight}`);

    const percentage = scrolled / (pageHeight - viewHeight) * 100;
    // console.log(percentage);

    document.querySelector('#bar').style.width = `${percentage}%`;
}

window.addEventListener('scroll', getSCrollPercent);