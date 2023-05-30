$(function () {
  $(".product_slide").slick({
    slidesToShow: 3,
    // 슬라이더 두개 엮기
    asNavFor: ".pic_slide",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".pic_slide").slick({
    vertical: true,
  });
});
