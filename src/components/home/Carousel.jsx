import bgBottom from "../../assets/bg-bottom.png";
import slide1 from "../../assets/slide-1-min.png";
import slide2 from "../../assets/slide-2-min.png";
import slide3 from "../../assets/slide-3-min.png";
import slide4 from "../../assets/slide-4-min.png";
import slide5 from "../../assets/slide-5-min.png";
import slide6 from "../../assets/slide-6-min.png";
import slideb1 from "../../assets/slide-b1-min.png";
import slideb2 from "../../assets/slide-b2-min.png";
import slideb3 from "../../assets/slide-b3-min.png";
import slideb4 from "../../assets/slide-b4-min.png";
import slideb5 from "../../assets/slide-b5-min.png";
import slideb6 from "../../assets/slide-b6-min.png";
import "./home.css";
export default function Carousel() {
  return (
    <div className="relative py-10 lg:py-16 xl:py-20">
      <div className="container mb-6 md:mb-10 lg:mb-16 xl:mb-20">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#374151] leading-6 sm:leading-8 lg:leading-10 xl:leading-[60px] text-center">
          <span className="text-[#79B952]">Tabiat</span> – bu yagona kitob,
          uning har bir sahifasi chuqur mazmunga to’la.
        </h3>
      </div>
      <img className="absolute right-0 -top-20" src={bgBottom} width={350} />
      <div className="carousel overflow-hidden">
        <div className="carousel-inner w-full flex gap-3 lg:gap-4 xl:gap-5 mb-3 lg:mb-4 xl:mb-5">
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slide1}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slide2}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slide3}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slide4}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slide5}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slide6}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slide1}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slide2}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slide3}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slide4}
          />
        </div>
        <div className="carousel-inner reverse w-full flex gap-3 lg:gap-4 xl:gap-5">
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slideb1}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slideb2}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slideb3}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slideb4}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slideb5}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slideb6}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slideb1}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slideb2}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slideb3}
          />
          <img
            className="h-[150px] sm:h-[200px] lg:h-[300px] w-auto"
            src={slideb4}
          />
        </div>
      </div>
    </div>
  );
}
