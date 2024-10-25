import { RecordsCard } from "../ui/cards/RecordsCard";
import Header from "../ui/header/Header";

const RecordsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="container max-w-[1200px]">
        <Header />
      </div>
      <div className="bg-[#F3F4F6] flex gap-6 w-screen h-screen justify-center pt-[32px]">
        <RecordsCard />
        <div className="w-[886px] h-[900px] border "></div>
      </div>
    </div>
  );
};
export default RecordsPage;
