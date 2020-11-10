const $burger = $('.js-burger');
const $body = $('body');
const $menu = $('.js-menu');
const $menuLink = $('.js-menu__link');

$burger.on('click', function() {
  $(this).toggleClass('is-active');
  $menu.toggleClass('is-active');
  $body.toggleClass('is-static');
});

$menuLink.on('click', function() {
  $menu.toggleClass('is-active');
  $burger.toggleClass('is-active');
  $body.removeClass('is-static');
});