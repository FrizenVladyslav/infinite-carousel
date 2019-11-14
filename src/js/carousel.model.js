import EventEmitter from "./utils/eventEmitter";

export default class CarouselModel extends EventEmitter {
  constructor(length) {
    super();
    this._slides = [...Array(length)].map((indem, index) => index);
    this._colors = [...Array(length)].map((indem, index) =>
      this.getRandomColor()
    );
    this._activeSlide = 0;
  }

  get slides() {
    return this._slides;
  }

  get colors() {
    return this._colors;
  }

  get activeSlide() {
    return this._activeSlide;
  }

  set activeSlide(value) {
    this._activeSlide = value;
  }

  getRandomColor = () => {
    const hexSymbols = "0123456789ABCDEF";
    let hex = "#";
    for (var i = 0; i < 6; i++) {
      hex += hexSymbols[Math.floor(Math.random() * 16)];
    }
    return hex;
  };
}
