import { CashCard } from "@/components/ui/cards/CashCard";
import Header from "@/components/ui/header/Header";
import { IncomeCard } from "../ui/cards/IncomeCard";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="container max-w-[1200px]">
        <Header />
      </div>
      <div className="bg-[#F3F4F6] flex justify-center w-screen  h-screen ">
        <div className="container flex gap-6 max-w-[1200px] mt-8  ">
          <CashCard />
          <IncomeCard />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
