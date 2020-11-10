const $hoverItem = $(".js-hover-item");
const $hoverContainer = $(".js-hover-container");

$hoverItem.on("mouseenter", function () {
  let dataItem = $(this).data("item");

  $hoverContainer.addClass(`hover-${dataItem}`);
});

$hoverItem.on("mouseleave", function () {
  let dataItem = $(this).data("item");

  $hoverContainer.removeClass(`hover-${dataItem}`);
});
