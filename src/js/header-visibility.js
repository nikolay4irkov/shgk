let userScrollTop = 0;
const $header = $('.js-header');

$(window).on('scroll', toggleHeaderVisibility);

function toggleHeaderVisibility() {
  const windowScrollTop = $(this).scrollTop();

  if (windowScrollTop  > userScrollTop && userScrollTop > 200) {
    $header.addClass('is-hidden');
  } else {
    $header.removeClass('is-hidden');
  }

  userScrollTop = windowScrollTop;
}