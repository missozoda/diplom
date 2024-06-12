export default function TopicsPage() {
  return (
    <div className="container overflow-hidden py-10">
      <embed
        // src="https://biologiya-diplom.vercel.app/topics/"
        src="http://localhost:3000/topics/"
        className="w-full min-h-[80vh] h-full overflow-hidden"
      />
    </div>
  );
}
