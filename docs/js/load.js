$("#iconb").click(function(){
  loadJson();
  $("#icona").show();
  $("#iconb").hide();
  $("#bgvideo").show();
  $("#bgvideo")[0].play();
  scroll();
});

function loadJson() {

//HTMLを初期化
$("#result").html("");
$("#result").append("<img src='img/title.black.toka.png' style='width: 70vw'>");
//HTMLを生成
$.getJSON("result.json", function(data){
$(data).each(function(){
$("#result").append('<div class="monme">'+
'<div class="title">'+this.title+'</div>'+
'<div class="locate">現地：<br>'+this.locate+'</div><br>'+
(this.w3w != '' ? '<div class="w3w">what3words：<br>'+this.w3w+'</div><br>' : '')+
(this.author.length > 0 ? '<div class="author">作問：<br>'+this.author.join("<br>")+'</div><br>' : '')+
(this.debug.length > 0 ?'<div class="debug">検証とデバッグ：<br>'+this.debug.join("<br>")+'</div><br>' : '')+
(this.tensai.length > 0 ? '<div class="tensai">甜菜：<br>'+this.tensai.join("<br>")+'</div>' : ''));
});
$("#result").append('<div class="monme">'+
'<div class="title">29匁 ポツンと一人で行くところ</div>'+
'<div class="locate">現地：<br>福岡県福岡市 福岡空港駅５番出口</div><br>'+
'<div class="w3w">what3words：<br>///はりあい・そして・おれい</div><br>'+
'<div class="author">作問・ロケハン：<br>なみ<br>脚本：<br>Ren<br>'+
'現地ガムテ・ロケハン・デザイン補佐：<br>みのり<br>デザイン：<br>kee<br>'+
'デザイン補佐：<br>海老<br>fff</div><br>'+
'<div class="debug">デバッグ：<br>さやちぃ。</div>'+
'<div class="tensai">甜菜：<br>@rare_shana3<br>@yuna_sashimi<br>@Euex<br>@swi_gin</div></div>');
$("#result").append('<div class="monme yusha">勇者(1~13,15～28匁):ゆうしゃくん<br>'+
'ゆうしゃくん総応援回数:1689回<br>'+
'14匁の勇者:マイクラ班<br>'+
'最終現地の勇者:Twitterのあんたがた'+
'</div>');
$("#result").append('</div>');
});

//HTMLを初期化
$("#staff").html("");
//HTMLを生成
$.getJSON("staff.json", function(data){
$("#staff").append('<div class="gmtitle">GM</div>');
$("#staff").append('<div class="staff">'+data.gm.join("<br>")+'</div>');
$(data.special).each(function(){
$("#staff").append('<div class="role">'+this.role.join('<br>')+'</div>'+
'<div class="staff">'+this.name.join('<br>')+'</div>');
})
$("#staff").append('<div class="message">THANK YOU FOR PLAYING<br>'+
'#atgm_2020<br>THE END</div>');
});

}
