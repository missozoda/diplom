export default function GamesPage() {
  return (
    <div className="container overflow-hidden py-10">
      <h2 className="mb-16 text-3xl font-bold text-gray-900 leading-8 text-center">
        Berilgan rasmlardan qushlarni va ayna shu qushning tuxumini mosini
        topishingiz kerak.
      </h2>
      <embed
        src="https://biologiya-diplom.vercel.app/games/"
        // src="http://localhost:3000/games/"
        className="w-full h-[80vh] overflow-hidden"
      />
    </div>
  );
}
