import kalandar from "../assets/kalandar.jpg";
import munisa from "../assets/munisa.jpg";
import bgTop from "../assets/bg-top.png";

export default function AuthorsPage() {
  return (
    <div className="relative">
      <div className="container py-20">
        <img src={bgTop} className="absolute right-0 bottom-0" width={250} />
        <h3 className="mb-8 text-center text-4xl font-bold leading-9 text-gray-700">
          Mualliflar haqida
        </h3>
        <div className="flex gap-x-16 py-8 justify-between">
          <div className="flex rounded-[20px] shadow-[0_0_8px_6px_#79B95215]">
            <img
              className="rounded-s-[20px] h-auto"
              src={kalandar}
              width={250}
              alt="Saparov Kalandar Abdullayevich"
            />
            <div className="p-5">
              <h4 className="text-gray-900 font-semibold text-2xl text-center leading-8 mb-4">
                Saparov Kalandar Abdullayevich
              </h4>
              <div className="w-28 h-0.5 bg-[#79B952] mb-4 mx-auto"></div>
              <p className="text-justify font-medium text-[#737373] text-lg">
                Nizomiy nomidagi Toshkent davlat pedagogika universiteti.
                “Zoologiya va anatomiya” kafedrasi professori., biologiya
                fanlari doktori
              </p>
            </div>
          </div>
          <div className="flex rounded-[20px] shadow-[0_0_8px_6px_#79B95215]">
            <img
              className="rounded-s-[20px] h-auto"
              src={munisa}
              width={250}
              alt="Sanayeva Munisa Ilamonovna"
            />
            <div className="p-5">
              <h4 className="text-gray-900 font-semibold text-2xl text-center leading-8 mb-4">
                Sanayeva Munisa Ilamonovna
              </h4>
              <div className="w-28 h-0.5 bg-[#79B952] mb-4 mx-auto"></div>
              <p className="text-justify font-medium text-[#737373] text-lg">
                Nizomiy nomidagi Toshkent davlat pedagogika universiteti.
                “Zoologiya va anatomiya” kafedrasi tayanch doktoranti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
