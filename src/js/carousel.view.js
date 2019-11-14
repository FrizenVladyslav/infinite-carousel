import EventEmitter from "./utils/eventEmitter";
import { carouselWidth } from "../styles/_variables.scss";

export default class CarouselView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._carousel = elements.carousel;
    this._slides = this.renderSlides();
    this._startPosition = null;
    this._endPosition = null;
    this._startOffset = null;
    this._endOffset = null;
    this._preventActions = false;

    elements.nextButton.onclick = () => this.handleChangeSlide(1);
    elements.prevButton.onclick = () => this.handleChangeSlide(-1);

    this._carousel.addEventListener("transitionend", this.onCriticalSlide);
    this._carousel.addEventListener("touchstart", this.onDragStart);
    this._carousel.addEventListener("touchend", this.onDragEnd);
    this._carousel.addEventListener("touchmove", this.handleDrag);
    this._carousel.onmousedown = this.onDragStart;
  }

  get carouselWidth() {
    return carouselWidth.replace("px", "");
  }

  handleChangeDistance = slide => {
    this._carousel.style.left = -1000 + -1 * slide * this.carouselWidth + "px";
    this.emit("changeSlide", slide);
  };

  handleChangeSlide = (vecrot = 1) => {
    if (this._preventActions) return;
    this._preventActions = true;

    const { activeSlide } = this._model;
    let nextSlide = activeSlide + vecrot;

    this._carousel.classList.add("move");
    this.handleChangeDistance(nextSlide);
  };

  onCriticalSlide = () => {
    this._carousel.classList.remove("move");
    let { activeSlide } = this._model;

    this._preventActions = false;

    if (activeSlide === -1) activeSlide = this._slides.length - 3;
    if (activeSlide === this._slides.length - 2) activeSlide = 0;

    this.handleChangeDistance(activeSlide);
  };

  renderSlides = () => {
    const { colors, slides } = this._model;

    return [slides[slides.length - 1], ...slides, slides[0]].map(item => {
      const slide = document.createElement("div");
      slide.style.backgroundColor = colors[item];
      slide.classList.add("slide");
      slide.innerText = `Slide ${item}`;

      this._carousel.appendChild(slide);
      this._carousel.style.left = `-${carouselWidth}`;

      return slide;
    });
  };

  onDragStart = e => {
    e.preventDefault();
    this._startOffset = this._carousel.offsetLeft;

    if (e.type == "touchstart")
      return (this._startPosition = e.touches[0].clientX);

    this._startPosition = e.clientX;
    document.onmouseup = this.onDragEnd;
    document.onmousemove = this.handleDrag;
  };

  handleDrag = e => {
    if (e.type == "touchmove") {
      this._endPosition = this._startPosition - e.touches[0].clientX;
      this._startPosition = e.touches[0].clientX;
    } else {
      this._endPosition = this._startPosition - e.clientX;
      this._startPosition = e.clientX;
    }
    this._carousel.style.left =
      this._carousel.offsetLeft - this._endPosition + "px";
  };

  onDragEnd = () => {
    this._endOffset = this._carousel.offsetLeft;

    switch (true) {
      case this._endOffset - this._startOffset < -this.carouselWidth / 3:
        this.handleChangeSlide(1);
        break;
      case this._endOffset - this._startOffset > this.carouselWidth / 3:
        this.handleChangeSlide(-1);
        break;
      default:
        this._carousel.style.left = this._startOffset + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  };
}
