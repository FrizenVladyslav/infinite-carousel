import CarouselController from "./js/carousel.controller";
import CarouselModel from "./js/carousel.model";
import CarouselView from "./js/carousel.view";

import './styles/styles.scss'


window.addEventListener("load", () => {
  const model = new CarouselModel(5);
  const view = new CarouselView(model, {
    carousel: document.querySelector('.carousel'),
    nextButton: document.querySelector('.control-right'),
    prevButton: document.querySelector('.control-left')
  });
  new CarouselController(model, view);
});