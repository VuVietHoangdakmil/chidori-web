import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./DotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButton";
import useEmblaCarousel from "embla-carousel-react";

import "./index.css";

export type silde = React.ReactNode;

type PropType = {
  slides: silde[];
  options?: EmblaOptionsType;
  hiddenArrow?: boolean;
  hiddenDot?: boolean;
  slideSize: "100%" | "70%" | "100%/3";
  positionAbsolute?: boolean;
  dataNumber: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {
    positionAbsolute,
    slides,
    options,
    hiddenArrow,
    hiddenDot,
    slideSize,
    dataNumber,
    setCurrent,
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    slideSize === "100%/3" ? { ...options, align: "start" } : options
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    onDotButtonClick(dataNumber);
  }, [dataNumber]);
  useEffect(() => {
    setCurrent(selectedIndex);
  }, [selectedIndex]);
  const element = (
    <div className="embla">
      <div style={{ display: "flex", alignItems: "center" }}>
        {hiddenArrow || (
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        )}
        <div className="embla__viewport w-full" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div
                className={`embla_main ${
                  slideSize === "70%"
                    ? "embla__slide-70"
                    : slideSize === "100%"
                    ? "embla__slide-100"
                    : "embla__slide-lg"
                }`}
                key={index}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
        {hiddenArrow || (
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        )}
      </div>
      {hiddenDot || (
        <div
          className={`${
            positionAbsolute ? "position-absolute" : ""
          } embla__dots`}
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot
      ${index === selectedIndex ? "embla__dot--selected" : ""}
    `}
            />
          ))}
        </div>
      )}
    </div>
  );

  return element;
};

export default EmblaCarousel;
