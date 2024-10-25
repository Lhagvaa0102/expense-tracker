"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
export const BarChart = () => {
  return (
    <div className="w-[588px] h-[284px] rounded-xl bg-[#FFFFFF]">
      <div className=" border-b pl-6 pr-6 pt-4 pb-4 ">
        <p className="text-[#0F172A] font-semibold"> Income-Expense</p>
      </div>
      <div className="pt-8 pb-8 pl-6 pr-6">
        <div className="flex flex-col text-sm font-normal gap-[18px]"></div>
        <div></div>
      </div>
    </div>
  );
};
