import aboutBg from "../assets/about-bg.png";
import bgLeft from "../assets/bg-left.png";
import bgTop from "../assets/bg-top.png";
import interaktiv from "../assets/interaktiv.png";
import qulay from "../assets/qulay.png";
import moslashuvchan from "../assets/moslashuvchan.png";
export default function AboutPage() {
  return (
    <div className="relative">
      <div className="container py-16">
        <img src={bgLeft} className="absolute left-0 top-0" width={350} />
        <div className="flex gap-x-24 mb-24">
          <div className="py-10">
            <div className="ml-auto w-32 h-1.5 mb-10 bg-[#79B952]"></div>
            <h3 className="mb-10 text-4xl font-bold text-gray-900 text-right leading-10">
              Elektron darsliklar ta’lim kelajagi
            </h3>
            <p className="text-[#737373] text-xl font-medium text-right leading-7">
              Elektron darsliklar faqat bosma darsliklarning raqamli ko'rinishi
              emas. Ular o'rganish va axborot bilan o'zaro ta'sir qilish uchun
              yangi imkoniyatlarni ifodalaydi.
            </p>
          </div>
          <img src={aboutBg} />
        </div>
        <h4 className="my-4 text-center font-semibold text-3xl leading-8 text-gray-900">
          Elektron darsliklar bir qator afzalliklarga ega
        </h4>
        <img src={bgTop} className="absolute right-0 top-0" width={250} />
        <div className="grid grid-cols-3 gap-x-16 py-12">
          <div className="shadow-[0_0_6px_4px_#79B95225] py-8 px-6 border-[#79B952]">
            <div className="w-[72px] h-[72px] bg-[#79B952] rounded-full flex items-center justify-center">
              <img src={interaktiv} />
            </div>
            <p className="my-5 font-bold text-2xl">Interaktiv</p>
            <div className="mb-6 w-28 h-0.5 bg-[#79B952]"></div>
            <p className="text-[#737373] text-justify text-lg text-medium leading-6">
              Raqamli darsliklar jonlantirilgan illyustratsiyalar, videolar,
              interfaol tadbirlar va o‘rganishni yanada qiziqarli va jozibador
              qiladigan boshqa elementlarni o‘z ichiga olishi mumkin.
            </p>
          </div>
          <div className="shadow-[0_0_6px_4px_#79B95225] py-8 px-6 border-[#79B952]">
            <div className="w-[72px] h-[72px] bg-[#79B952] rounded-full flex items-center justify-center">
              <img src={qulay} />
            </div>
            <p className="my-5 font-bold text-2xl">Qulay</p>
            <div className="mb-6 w-28 h-0.5 bg-[#79B952]"></div>
            <p className="text-[#737373] text-justify text-lg text-medium leading-6">
              Elektron darsliklardan Internetga ulangan har qanday qurilmada
              foydalanish mumkin, bu esa ularni dunyoning istalgan nuqtasida
              o‘quvchilarga taqdim etadi.
            </p>
          </div>
          <div className="shadow-[0_0_6px_4px_#79B95225] py-8 px-6 border-[#79B952]">
            <div className="w-[72px] h-[72px] bg-[#79B952] rounded-full flex items-center justify-center">
              <img src={moslashuvchan} />
            </div>
            <p className="my-5 font-bold text-2xl">Moslashuvchan</p>
            <div className="mb-6 w-28 h-0.5 bg-[#79B952]"></div>
            <p className="text-[#737373] text-justify text-lg text-medium leading-7">
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
