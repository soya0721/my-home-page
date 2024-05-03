$(document).ready(function(){
  //スライドショー（トップビュー）
  $('.slider').slick({

    autoplay:true,
    autoplaySpeed:1800,
    fade:true,
    arrows:true,
    // →なくすコード
    arrows: false
  });


  //スライドショー（）
  $(".slider2").slick({
    infinite: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1300,  // 1200px以下の設定
            settings: {
                slidesToShow: 2  // 2枚表示
            }
        },
        {
          breakpoint: 600,  // 780px以下の設定
          settings: {
              slidesToShow: 1  // 1枚だけ表示
          }
      }
    ]
});

$(".slider2contents").hide();

$("img").on("mouseover", function() {
    $(this).parent().find(".slider2contents").slideDown(500);
});

$("img").on("mouseleave", function() {
  $(this).parent().find(".slider2contents").slideUp(500);
});

  // ハンバーガー
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });

  // ローディングアニメーション
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    }, 3000)
  })

});