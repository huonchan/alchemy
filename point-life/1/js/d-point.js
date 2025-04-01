const D_LOTTERY_URLS = new Map();
D_LOTTERY_URLS.set("dポイントマーケット 毎日くじ", "https://t.co/Ic7pQM64Hm");
D_LOTTERY_URLS.set("dファッション 毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/mpoJkiTW?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");
D_LOTTERY_URLS.set("dジョブ 毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/1cpxtacB?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");
D_LOTTERY_URLS.set("サンプル百貨店 毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/vCDvTF4S?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");
D_LOTTERY_URLS.set("dミュージック 毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/aIeXbnYT?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");
D_LOTTERY_URLS.set("ふるさと納税百選 毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/91Wn636O?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");
D_LOTTERY_URLS.set("dブック 毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/wMK4eyqh?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");
D_LOTTERY_URLS.set("dカーシェア 毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/2J51DHgH?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");
D_LOTTERY_URLS.set("dヘルスケア 毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/6DznlB6Z?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");
D_LOTTERY_URLS.set("dショッピング 毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/dGhu7wdw?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");
D_LOTTERY_URLS.set("ドコモスポーツくじ 毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/abAvv4wA?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");
D_LOTTERY_URLS.set("Jリーグ☓毎日くじ", "https://kuji.dmarket.docomo.ne.jp/kuji/64hhlosJ?userId=717427b3ba6a12adb97dc962f53c181470d82352bbc4d88f73a3a0f035e38437&dpoint=1&month=202504&key=3a68cef0c20a818ea8815315e2a6207894ca47d742bc28896d5fd860d704cab6&device=pc");


function initializedD()
{
    var html = ``
    D_LOTTERY_URLS.forEach((value, key) => {
        html +=
            `<li><a href="${value}" target="_blank"> ${key}</a></li>`;
    });

    document.getElementById('d-point-lottery').innerHTML = html;

}



function openAllDPointLottery()
{
    const delay = 1000; // 1.0秒(0.5だとエラー吐かれる)
    var index = 0;
    for (const [key, value] of D_LOTTERY_URLS) {
        setTimeout(function() {
            window.open(value, '_blank');
            console.log(`Opened: ${value}`); // 開いたURLをコンソールに表示 (確認用)
          }, index * delay);

          index++;
    }
}



//init
initializedD();
//todo:他のバインド処理も合わせてinit関数にできねーか検討
document.addEventListener('DOMContentLoaded', function () {
    const openMultipleLinksButton = document.getElementById('all-d-point-lottery-open');

    openMultipleLinksButton.addEventListener('click', function (event) {
        event.preventDefault(); // デフォルトのリンク遷移を防止

        openAllDPointLottery();

    });
});