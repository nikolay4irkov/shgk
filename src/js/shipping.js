const $citySelect = $(".js-city-select");
const $fractionSelect = $(".js-fraction-select");

$citySelect.on("change", () => {
  calculate();
});

$fractionSelect.on("change", () => {
  calculate();
});

function calculate() {
  const cityVal = $citySelect.val();
  const fractionVal = +$fractionSelect.val();
  console.log(cityVal, fractionVal);
  if (!cityVal || !fractionVal) return;

  const citiesData = JSON.parse($(".js-data")[0].innerHTML);
  const formula = $(".js-formula")[0].innerHTML;
  const requiredCity = citiesData.find((city) => city.name === cityVal);
  const price = Math.round(eval(formula) * 100) / 100;
  $(".js-distance").val(requiredCity.distance);
  $(".js-price").val(price);
  $(".js-image")[0].src = requiredCity.imagePath;
}
