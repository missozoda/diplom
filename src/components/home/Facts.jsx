import { useRef } from "react";
import meduza from "../../assets/meduza.png";
import fil from "../../assets/sut-emizuvchi.png";
import tabiat from "../../assets/tabiat.png";
import bgImg from "../../assets/bg-img.png";
import bgTop from "../../assets/bg-top.png";
import bgLeft from "../../assets/bg-left.png";
export default function Facts() {
  const factsRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="container py-20">
        <div className="mb-20 flex flex-col items-center animate-bounce  ">
          <p className="mb-4 text-2xl font-medium leading-6 text-[#79B952]">
            Qiziqarli ma'lumotlar
          </p>
          <button onClick={() => scrollToSection(factsRef)}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="19.5" fill="white" stroke="#79B952" />
              <path
                d="M24.59 17.2949L20 21.8749L15.41 17.2949L14 18.7049L20 24.7049L26 18.7049L24.59 17.2949Z"
                fill="#79B952"
              />
            </svg>
          </button>
        </div>
        <img className="absolute right-0 -top-56" src={bgTop} />
        <div
          className="w-full flex items-center justify-between gap-x-16 py-20"
          ref={factsRef}
        >
          <div className="img-wrapper relative">
            <img
              className="w-[400px] rounded-s-[36px] rounded-t-[36px]"
              src={meduza}
            />
            <img
              className="absolute bottom-0 left-0 right-0 z-20"
              src={bgImg}
            />
            <div className="absolute bottom-0 right-0 w-[190px] h-[190px] rounded-tl-[36px] border-t-8 border-l-8 border-white bg-[#79B952] py-10 pl-5 text-white">
              <p className="my-2 text-lg">Mavjud turlar</p>
              <p className="text-4xl font-semibold">9900 + </p>
            </div>
          </div>
          <div className="max-w-[700px]">
            <h3 className="mb-8 text-3xl font-bold leading-7 text-[#79B952]">
              Meduza
            </h3>
            <p className="mb-3 text-2xl font-medium leading-9 text-[#374151]">
              Yerda bitta va yagona o’lmas mavjudot mavjud. Bu biologlar
              tomonidan yaxshi o’rganilgan{" "}
              <span className="text-[#79B952]">meduzadir</span> .
            </p>
            <p className="mb-3 text-2xl font-medium leading-9 text-[#374151]">
              U polipdan rivojlanadi va meduzaning hayot davri tugagandan keyin
              o’lmaydi, balki suv tubiga cho’kadi va yana polipga aylanadi,
              undan keyin sikl yana boshlanadi.
            </p>
            <p className="mb-3 text-2xl font-medium leading-9 text-[#374151]">
              Ushbu meduzalarni baliqlar ishtiyoq bilan iste’mol qililishi
              ularning abadiy yashashiga halaqit beradigan yagona narsa.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-x-16 py-20">
          <div className="max-w-[700px] text-right">
            <h3 className="mb-8 text-3xl font-bold leading-7 text-[#79B952]">
              Sutemizuvchilar
            </h3>
            <p className="mb-3 text-2xl font-medium leading-9 text-[#374151]">
              <span className="text-[#79B952]">Sut emizuvchilar</span> qonining
              qizil rangi uchun temir elementi javobgar, u kislorodning
              tashuvchisi hisoblanadi.
            </p>
            <p className="mb-3 text-2xl font-medium leading-9 text-[#374151]">
              Ba’zi mollyskalarda bu funksiyani qaysidir element bajaradi
              shuning uchun ularning qoni ko’k rangda bo’ladi.
            </p>
            <p className="mb-3 text-2xl font-medium leading-9 text-[#374151]">
              Sizningcha bu qaysi element bo’lishi mumkin.
            </p>
          </div>
          <div className="img-wrapper relative">
            <img
              className="w-[400px] rounded-e-[36px] rounded-t-[36px]"
              src={fil}
            />
            <img
              className="absolute bottom-0 left-0 right-0 z-20"
              src={bgImg}
            />
            <div className="absolute bottom-0 left-0 w-[190px] h-[190px] rounded-tr-[36px] border-t-8 border-r-8 border-white bg-[#79B952] py-6 pl-6 text-white">
              <p className="text-lg">Mavjud turlar</p>
              <p className="mb-3 text-3xl font-semibold">230 + </p>
              <p className="text-lg">Kenja turlar</p>
              <p className="text-3xl font-semibold">91 + </p>
            </div>
          </div>
        </div>
        <img className="absolute -left-16 top-[20%]" src={bgLeft} />
        <div className="w-full flex items-center justify-between gap-x-16 py-20">
          <div className="img-wrapper relative">
            <img
              className="w-[400px] rounded-s-[36px] rounded-t-[36px]"
              src={tabiat}
            />
            <img
              className="absolute bottom-0 left-0 right-0 z-20"
              src={bgImg}
            />
            <div className="absolute bottom-0 right-0 w-[190px] h-[190px] rounded-tl-[36px] border-t-4 border-l-4 border-white bg-[#79B952] py-6 text-white text-center">
              <p className="text-lg italic">"bios" - </p>
              <p className="mb-2 text-3xl font-medium">hayot</p>
              <p className="text-lg italic">"logos" - </p>
              <p className="text-3xl font-medium">bilim</p>
            </div>
          </div>
          <div className="max-w-[700px]">
            <h3 className="mb-8 text-3xl font-bold leading-7 text-[#79B952]">
              Biologiya
            </h3>
            <p className="mb-10 text-2xl font-medium leading-9 text-[#374151]">
              Tabiatni o’rganuvchi biologiya fani bizning yagona va albatta eng
              yaxshi murabbiyimiz.
            </p>
            <p className="mb-3 text-2xl font-medium leading-9 text-[#374151]">
              Kim uni diqqat bilan o’rganib, ko’rsatmalariga rioya qilsa, u hech
              qanday shubhasiz eng yaxshi natijaga erishadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
