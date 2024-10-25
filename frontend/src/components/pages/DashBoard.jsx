import { CashCard } from "@/components/ui/cards/CashCard";
import Header from "@/components/ui/header/Header";
import { IncomeCard } from "../ui/cards/IncomeCard";
import { ExpenseCard } from "../ui/cards/ExpenseCard";
import { BarChart } from "../ui/charts/BarChart";
import { DoughnutChart } from "../ui/charts/DoughnutChart";

import { LastRecords } from "../ui/cards/LastRecords";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="container max-w-[1200px]">
        <Header />
      </div>
      <div className="bg-[#F3F4F6] flex flex-col items-center gap-6 w-screen  h-screen ">
        <div className="container grid grid-cols-3 gap-6 max-w-[1200px] mt-8  ">
          <CashCard />
          <IncomeCard />
          <ExpenseCard />
        </div>
        <div className="flex gap-6">
          <BarChart />
          <DoughnutChart />
        </div>
        <div>
          <LastRecords />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
