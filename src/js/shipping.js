const $citySelect = $(".js-city-select");

$citySelect.on("change", ({ target: { value } }) => {
  const citiesData = JSON.parse($(".js-data")[0].innerHTML);
  const formula = $(".js-formula")[0].innerHTML;
  const requiredCity = citiesData.find((city) => city.name === value);
  const price = Math.round(eval(formula)*100)/100;
  $('.js-distance').val(requiredCity.distance);
  $('.js-price').val(price);
  $('.js-image')[0].src = requiredCity.imagePath
});
