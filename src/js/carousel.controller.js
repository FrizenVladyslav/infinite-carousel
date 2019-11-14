export default class CarouselController {
  constructor(model, view) {
    this._model = model;
    this._view = view;
    this._timeout = null;
    view.on("changeSlide", index => this.changeSlide(index));
  }

  changeSlide = index => {
    this._model.activeSlide = index;
  };
}
