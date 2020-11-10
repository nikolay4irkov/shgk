import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const facilities = new Swiper(".slider-documents", {
  speed: 1000,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".slider-documents .button-next",
    prevEl: ".slider-documents .button-prev",
  },
  pagination: {
    el: ".swiper-pagination--documents",
    type: "bullets",
    clickable: true,
  },
});
