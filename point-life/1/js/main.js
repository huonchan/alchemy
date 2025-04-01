const RAKUTEN_URLS = new Map();
RAKUTEN_URLS.set("楽天ラッキーくじ", "https://kuji.rakuten.co.jp/f3a3832d0c");
RAKUTEN_URLS.set("楽天トラベル ラッキーくじ", "https://kuji.rakuten.co.jp/1243541a35");
RAKUTEN_URLS.set("楽天証券ラッキーかぶくじ", "https://kuji.rakuten.co.jp/6e7329f994");
RAKUTEN_URLS.set("楽天保険 保険の比較 くじ ", "https://kuji.rakuten.co.jp/14d330d3e0");
RAKUTEN_URLS.set("楽天TV ラッキーくじ", "https://kuji.rakuten.co.jp/46211bf9dd");
RAKUTEN_URLS.set("楽天不動産 ラッキーくじ", "https://kuji.rakuten.co.jp/18584163d");
RAKUTEN_URLS.set("楽天PAY(オンライン決済）ラッキーくじ", "https://kuji.rakuten.co.jp/7393386d27");
RAKUTEN_URLS.set("楽天Web検索 ラッキーくじ", "https://kuji.rakuten.co.jp/4351057845");
RAKUTEN_URLS.set("楽天ブックス ラッキーくじ", "https://kuji.rakuten.co.jp/ef23be45f7");
RAKUTEN_URLS.set("楽天ブックス(Faithbook)ラッキーくじ", "https://kuji.rakuten.co.jp/42136c5d7d");
RAKUTEN_URLS.set("楽天カレンダーラッキーくじ", "https://kuji.rakuten.co.jp/9ea32a8dfa");
RAKUTEN_URLS.set("楽天カレンダーラッキーくじ2", "https://kuji.rakuten.co.jp/34e2cb79fa");
RAKUTEN_URLS.set("楽天ブログ ラッキーくじ", "https://kuji.rakuten.co.jp/c8437c01c5/");
RAKUTEN_URLS.set("楽天レシピ ラッキーくじ", "https://kuji.rakuten.co.jp/26d37b04b2");
RAKUTEN_URLS.set("楽天Edy ラッキーくじ", "https://kuji.rakuten.co.jp/38c3861fdc");
RAKUTEN_URLS.set("ニュース ラッキーくじ", "https://kuji.rakuten.co.jp/c5337832c5");
RAKUTEN_URLS.set("楽天ラクマのラッキーくじ", "https://kuji.rakuten.co.jp/26e390eccf");
RAKUTEN_URLS.set("楽天シニアのラッキーくじ", "https://kuji.rakuten.co.jp/5f93b1fd01");
RAKUTEN_URLS.set("楽天Play ラッキーくじ", "https://kuji.rakuten.co.jp/1993dd09b6");
//urls_m.set("楽天ぐるなびラッキーくじ", "https://kuji.rakuten.co.jp/0293c43591");//死んだ
//RAKUTEN_URLS.set("楽天ブラウザ ラッキーくじ", "https://kuji.rakuten.co.jp/3373caeddb"); //2025/04/01 死亡確認
RAKUTEN_URLS.set("infoseekくじ ", "https://kuji.rakuten.co.jp/889373540e");


function initializedRakuten()
{
    var rakuten_kuzi_all_html = ``
    RAKUTEN_URLS.forEach((value, key) => {
        rakuten_kuzi_all_html +=
            `<li><a href="${value}" target="_blank"> ${key}</a></li>`;
    });

    document.getElementById('rakuten_lottery').innerHTML = rakuten_kuzi_all_html;

}


function initialized()
{
    initializedRakuten();
}



function openAllRakutenLottery()
{
    const delay = 1000; // 1.0秒(0.5だとエラー吐かれる)
    var index = 0;
    for (const [key, value] of RAKUTEN_URLS) {
        setTimeout(function() {
            window.open(value, '_blank');
            console.log(`Opened: ${value}`); // 開いたURLをコンソールに表示 (確認用)
          }, index * delay);

          index++;
    }
}



//init
initialized();
//todo:他のバインド処理も合わせてinit関数にできねーか検討
document.addEventListener('DOMContentLoaded', function () {
    const openMultipleLinksButton = document.getElementById('all_rakuten_lottery_open');

    openMultipleLinksButton.addEventListener('click', function (event) {
        event.preventDefault(); // デフォルトのリンク遷移を防止

        openAllRakutenLottery();

    });
});