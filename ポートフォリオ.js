$(function(){
 
  /* TOP-Pageボタン制御 */
  $('.page-top').hide();  // TOP-Pageボタン非表示

  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {    // スクロールが100に達したらボタン表示
        $('.page-top').fadeIn();
      } else {
        $('.page-top').fadeOut();
      }
  });
 
  $('.page-top').click(function () {      // TOP-Pageボタンクリックされた時
    $('body,html').animate({scrollTop: 0}, 500);  // TOPへスクロール
    return false;
  });

  /* ドロップダウンメニュー */
  /* 初回表示 */
  if(window.matchMedia('(max-width: 680px)').matches) {
    $('#drop_menu_hidden').hide();  // Window スマホサイズの時
  }
  else {
    $('#drop_menu_hidden').show();  // Window PCサイズの時
  }

  /* ドロップダウンメニュークリック時の処理 */
  $('#spnavi li').click(function(){
    if($('#drop_menu_hidden').is(':hidden')){
      $('#drop_menu_hidden:not(:animated)').slideDown('fast');
    }
    else {
      $('#drop_menu_hidden:not(:animated)').slideUp('fast');
    }
  });
  
  /* windowがリサイズされたときの処理 */
  $(window).resize(function(){
  if(window.matchMedia('(max-width: 680px)').matches) {
    $('#drop_menu_hidden').hide();  // Window スマホサイズの時
  }
  else {
    $('#drop_menu_hidden').show();  // Window PCサイズの時
  }

  });
});

  /*背景画像自動切り替え*/
jQuery(function($) {
  $('.bg-slider').bgSwitcher({
      images: ['背景画像1.jpg','背景画像2.jpg','背景画像3.jpg'], // 切替背景画像を指定
interval: 10000, // 背景画像を切り替える間隔を指定 3000=3秒
      loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
      shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
      effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
      duration: 1000, // エフェクトの時間を指定します。
      easing: "swing" // エフェクトのイージングをlinear,swingから指定
  });
});

/*ページめくり*/
$(function(){
  $('#works').turn(
    {
      //自動でページをめくったときの高さ
      elevation: 50,
      //ページめくりのスピード(ms)
      duration: 1500,
      //ページをめくるときの影->有効
      gradients:true,
      //自動中央揃え->無効
      autoCenter:false,
      //右開きか左開きかの設定->右開き
      direction:'rtl',
   }
  );

  $('#prevpage').click(function(){
    $('#works').turn('previous');
  });

  $('#nextpage').click(function(){
    $('#works').turn('next');
});
});  
