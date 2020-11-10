const $accordionTitle = $(".js-accordion-title");
const $accordionText = $(".js-accordion-content");

$(document).ready(function () {
  $accordionText.fadeOut(0);
});

$accordionTitle.on("click", toggleAccordionContent);

function toggleAccordionContent() {
  $accordionText.not($(this).next()).slideUp("fast");

  $(this).next().slideToggle(400);

  if ($(this).hasClass("is-active")) {
    $(this).toggleClass("is-active");
  } else {
    $accordionTitle.removeClass("is-active");
    $(this).toggleClass("is-active");
  }
}
