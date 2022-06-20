
// 슬라이드 다운 메뉴
$('.navi > li').mouseover(function () {
    $(this).find('.submenu').stop().slideDown(500);
}).mouseout(function () {
    $(this).find('.submenu').stop().slideUp(500);
});



// 이미지 페이드인, 페이드아웃
$('.imgslide > a:gt(0)').hide();

setInterval(function () {
    $('.imgslide > a:first-child').fadeOut(1000)
    .next('a').fadeIn(1000)
    .end().appendTo('.imgslide');
}, 3000);

