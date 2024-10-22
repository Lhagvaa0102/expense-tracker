import { CashCard } from "@/components/ui/cards/CashCard";
import Header from "@/components/ui/header/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <div className="container">
        <Header />
      </div>
      <div className="bg-[#F3F4F6] flex justify-center w-screen  h-screen ">
        <div className="container mt-8  ">
          <CashCard />
        </div>
      </div>
    </div>
  );
}
