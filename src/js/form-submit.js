const $form = $(".js-form");
const $formHero = $(".form-hero");
const $thanksMessage = $(".thanks-block");

$form.on("submit", function (e) {
  e.preventDefault();

  let phpUrl = $(this).attr("action");
  sendAjaxSubscribeForm($(this), phpUrl);
});

function sendAjaxSubscribeForm(form, url) {
  $.ajax({
    url: url,
    type: "POST",
    dataType: "text",
    data: form.serialize(),
    success: function success() {
      //if it's form in hero section on main page show thanks and hide form
      if ($form.hasClass("form-hero")) {
        $formHero.addClass("is-hidden");
        $thanksMessage.addClass("is-active");
      }
    },

    error: function error(response) {
      console.log(response);
    },
  });
}
