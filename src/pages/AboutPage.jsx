import aboutBg from "../assets/about-bg.png";
import bgLeft from "../assets/bg-left.png";
import bgTop from "../assets/bg-top.png";
import interaktiv from "../assets/interaktiv.png";
import qulay from "../assets/qulay.png";
import moslashuvchan from "../assets/moslashuvchan.png";
export default function AboutPage() {
  return (
    <div className="relative">
      <div className="container py-10 md:py-16">
        <img src={bgLeft} className="absolute left-0 top-0" width={350} />
        <div className="flex gap-x-4 lg:gap-x-10 xl:gap-x-24 mb-6 md:mb-10 lg:mb-24 items-center">
          <div className="py-4 lg:py-10">
            <div className="max-sm:mx-auto sm:ml-auto w-32 h-1 mb-4 sm:mb-6 md:mb-10 bg-[#79B952] rounded-lg"></div>
            <h3 className="mb-4 md:mb-6 lg:mb-10 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 text-center sm:text-right leading-7 md:leading-10">
              Elektron darsliklar ta’lim kelajagi
            </h3>
            <p className="text-[#737373] text-base md:text-lg lg:text-xl font-medium text-center sm:text-right leading-6 md:leading-7">
              Elektron darsliklar faqat bosma darsliklarning raqamli ko'rinishi
              emas. Ular o'rganish va axborot bilan o'zaro ta'sir qilish uchun
              yangi imkoniyatlarni ifodalaydi.
            </p>
          </div>
          <img
            className="w-[250px] md:w-[400px] lg:w-[500px] h-auto max-sm:hidden"
            src={aboutBg}
          />
        </div>
        <h4 className="my-2 md:my-4 text-center font-semibold text-xl sm:text-2xl lg:text-3xl leading-6 md:leading-8 text-gray-900">
          Elektron darsliklar bir qator afzalliklarga ega
        </h4>
        <img src={bgTop} className="absolute right-0 top-0" width={250} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-x-8 xl:gap-x-16 py-6 lg:py-12">
          <div className="shadow-[0_0_6px_4px_#79B95225] py-4 lg:py-8 px-4 lg:px-6 min-h-[290px]">
            <div className="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px] bg-[#79B952] rounded-full flex items-center justify-center">
              <img src={interaktiv} />
            </div>
            <p className="my-2 lg:my-5 font-bold text-xl lg:text-2xl">
              Interaktiv
            </p>
            <div className="mb-3 lg:mb-6 w-28 h-0.5 bg-[#79B952]"></div>
            <p className="text-[#737373] text-justify text-base lg:text-lg font-medium leading-6">
              Raqamli darsliklar jonlantirilgan illyustratsiyalar, videolar,
              interfaol tadbirlar va o‘rganishni yanada qiziqarli va jozibador
              qiladigan boshqa elementlarni o‘z ichiga olishi mumkin.
            </p>
          </div>
          <div className="shadow-[0_0_6px_4px_#79B95225] py-4 lg:py-8 px-4 lg:px-6 min-h-[290px]">
            <div className="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px] bg-[#79B952] rounded-full flex items-center justify-center">
              <img src={qulay} />
            </div>
            <p className="my-2 lg:my-5 font-bold text-xl lg:text-2xl">Qulay</p>
            <div className="mb-3 lg:mb-6 w-28 h-0.5 bg-[#79B952]"></div>
            <p className="text-[#737373] text-justify text-base lg:text-lg font-medium leading-6">
              Elektron darsliklardan Internetga ulangan har qanday qurilmada
              foydalanish mumkin, bu esa ularni dunyoning istalgan nuqtasida
              o‘quvchilarga taqdim etadi.
            </p>
          </div>
          <div className="shadow-[0_0_6px_4px_#79B95225] py-4 lg:py-8 px-4 lg:px-6 min-h-[290px]">
            <div className="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px] bg-[#79B952] rounded-full flex items-center justify-center">
              <img src={moslashuvchan} />
            </div>
            <p className="my-2 lg:my-5 font-bold text-xl lg:text-2xl">
              Moslashuvchan
            </p>
            <div className="mb-3 lg:mb-6 w-28 h-0.5 bg-[#79B952]"></div>
            <p className="text-[#737373] text-justify text-base lg:text-lg font-medium leading-6">
              Elektron darsliklar talabalarning individual ehtiyojlariga
              osongina moslashtirilishi va istalgan vaqtda foydalanish
              imkoniyatini beradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
