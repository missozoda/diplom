import bgBottom from "../../assets/bg-bottom.png";
import slide1 from "../../assets/slide-1.png";
import slide2 from "../../assets/slide-2.png";
import slide3 from "../../assets/slide-3.png";
import slide4 from "../../assets/slide-4.png";
import slide5 from "../../assets/slide-5.png";
import slide6 from "../../assets/slide-6.png";
import slideb1 from "../../assets/slide-b1.png";
import slideb2 from "../../assets/slide-b2.png";
import slideb3 from "../../assets/slide-b3.png";
import slideb4 from "../../assets/slide-b4.png";
import slideb5 from "../../assets/slide-b5.png";
import slideb6 from "../../assets/slide-b6.png";
import "./home.css";
export default function Carousel() {
  return (
    <div className="relative py-24">
      <div className="container mb-28">
        <h3 className="text-4xl font-semibold text-[#374151] leading-[60px] text-center">
          <span className="text-[#79B952]">Tabiat</span>– bu yagona kitob, uning
          har bir sahifasi chuqur mazmunga to’la.
        </h3>
      </div>
      <img className="absolute right-0 -top-20" src={bgBottom} />
      <div className="carousel overflow-hidden">
        <div className="carousel-inner w-full flex gap-4 mb-4">
          <img className="h-[300px] w-auto" src={slide1} />
          <img className="h-[300px] w-auto" src={slide2} />
          <img className="h-[300px] w-auto" src={slide3} />
          <img className="h-[300px] w-auto" src={slide4} />
          <img className="h-[300px] w-auto" src={slide5} />
          <img className="h-[300px] w-auto" src={slide6} />
          <img className="h-[300px] w-auto" src={slide1} />
          <img className="h-[300px] w-auto" src={slide2} />
          <img className="h-[300px] w-auto" src={slide3} />
          <img className="h-[300px] w-auto" src={slide4} />
          <img className="h-[300px] w-auto" src={slide5} />
          <img className="h-[300px] w-auto" src={slide6} />
        </div>
        <div className="carousel-inner reverse w-full flex gap-4">
          <img className="h-[300px] w-auto" src={slideb1} />
          <img className="h-[300px] w-auto" src={slideb2} />
          <img className="h-[300px] w-auto" src={slideb3} />
          <img className="h-[300px] w-auto" src={slideb4} />
          <img className="h-[300px] w-auto" src={slideb5} />
          <img className="h-[300px] w-auto" src={slideb6} />
          <img className="h-[300px] w-auto" src={slideb1} />
          <img className="h-[300px] w-auto" src={slideb2} />
          <img className="h-[300px] w-auto" src={slideb3} />
          <img className="h-[300px] w-auto" src={slideb4} />
          <img className="h-[300px] w-auto" src={slideb5} />
          <img className="h-[300px] w-auto" src={slideb6} />
        </div>
      </div>
    </div>
  );
}
