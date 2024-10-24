import { ExpenseIcon } from "@/components/icons/ExpenseIcon";

export const ExpenseCard = () => {
  return (
    <div className="w-[384px] h-[216px]  rounded-xl bg-[#FFFFFF]  ">
      <div className="border-b border-[#E2E8F0] flex items-center pl-6 pr-6 pt-4 pb-4 gap-3 ">
        <div className="w-[8px] h-[8px] border-none rounded-full bg-[#0166FF]"></div>
        <p className="text-base font-semibold">Total Expense</p>
      </div>
      <div className="pl-[24px] pt-[20px] pb-[20px] flex gap-4 flex-col ">
        <div>
          <p className="font-semibold text-4xl text-[#000000]">-1,200,000$</p>
          <p className="text-lg text-[#64748B] font-normal">
            Your Expense Amount
          </p>
        </div>
        <div>
          <div className="flex">
            <div>
              <ExpenseIcon />
            </div>
            <p>32% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};
