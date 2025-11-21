const D_LOTTERY_URLS = new Map();
//無駄に時間食うやつ
D_LOTTERY_URLS.set("ポイント広場","https://hiroba.dpoint.docomo.ne.jp/kuji/daily/");
//クーポン
D_LOTTERY_URLS.set("dカーシェア 毎日くじc","https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_004_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3D2J51DHgH");
D_LOTTERY_URLS.set("dファッション 毎日くじc", "https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_001_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3DmpoJkiTW");
D_LOTTERY_URLS.set("dブック 毎日くじc", "https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_002_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3DwMK4eyqh");
D_LOTTERY_URLS.set("サンプル百貨店 毎日くじc", "https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_007_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3DvCDvTF4S");
D_LOTTERY_URLS.set("dショッピング 毎日くじc","https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_008_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3DdGhu7wdw");

//ポイント
D_LOTTERY_URLS.set("docomo 毎日くじp", "https://dmarket.docomo.ne.jp/portal/clicklog?lid=ex03_me_pc_102_001_%2Fkuji%2F_99&url=https%3A%2F%2Fservice.smt.docomo.ne.jp%2Fportal%2Fspecial%2Fcollab%2Ftopics%2Fsrc%2Fdmenukuji_01.html%3Futm_source%3Ddmktportal%26utm_medium%3Downed%26utm_campaign%3Ddmktportal_daily_lottery_start&opt=kuji_continuation_visited_5%2C2025%2F04%2F02%2004%3A15%3A17%2Cbonus-visit-01%2C02");
D_LOTTERY_URLS.set("dポイントマーケット 毎日くじp", "https://t.co/Ic7pQM64Hm");
D_LOTTERY_URLS.set("dヘルスケア 毎日くじp", "https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_006_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3D6DznlB6Z");
D_LOTTERY_URLS.set("dミュージック 毎日くじp", "https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_009_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3DaIeXbnYT");
D_LOTTERY_URLS.set("ドコモスポーツくじ 毎日くじp", "https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_010_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3DabAvv4wA");
D_LOTTERY_URLS.set("dジョブ 毎日くじp", "https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_003_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3D1cpxtacB");
D_LOTTERY_URLS.set("Jリーグ☓毎日くじp", "https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_012_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3D64hhlosJ");

//先の時代の敗北者
//D_LOTTERY_URLS.set("ふるさと納税百選 毎日くじ", "https://dmarket.docomo.ne.jp/portal/clicklog?lid=in01_etc_pc_101_011_/kuji/_99&url=https%3A%2F%2Fdmarket.docomo.ne.jp%2Fkuji%2Fgo_to_kuji_page.html%3Ft%3D20250411185956%26id%3D91Wn636O");
//D_LOTTERY_URLS.set("すごろく(仮）", "https://dmarket.docomo.ne.jp/sugoroku/");死んだ


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