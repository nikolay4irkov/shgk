let userScrollTop = 0;
const $header = $(".js-header");

$(window).on("scroll", toggleHeaderVisibility);

function toggleHeaderVisibility() {
  const windowScrollTop = $(window).scrollTop();
  const isDesktop = $(window).width() > 1024;
  if (isDesktop) {
    if (windowScrollTop > 200) {
      $header.removeClass("is-white");
    } else {
      $header.addClass("is-white");
    }
  } else {
    if (windowScrollTop > userScrollTop && userScrollTop > 200) {
      $header.addClass("is-hidden");
    } else {
      $header.removeClass("is-hidden");
    }
  }

  userScrollTop = windowScrollTop;
}
