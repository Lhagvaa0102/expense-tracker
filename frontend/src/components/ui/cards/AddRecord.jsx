import { ArrowDropDown } from "@/components/icons/ArrowDropDown";
import { useState } from "react";
import { DatePickerComp } from "../drop-drown/DatePickerComp";

export const AddRecords = () => {
  const [isselected, setisSelected] = useState(true);
  const [change, setChange] = useState();
  const toggleText = () => {
    setisSelected(!isselected);
  };
  return (
    <div className="modal-box max-w-[696px] h-[512px] p-0 ">
      <div className="border-b font-semibold text-xl pl-6 pr-6 pt-5 pb-5">
        Add Record
      </div>
      <div className="flex">
        <div className="w-[348px] h-[420px] border flex flex-col p-6">
          <div className="border">
            {isselected ? (
              <button
                onClick={toggleText}
                className="bg-[#0166FF] pl-6 pr-6 rounded-[20px] text-[#FFFFFF] "
              >
                Expense
              </button>
            ) : (
              <button
                onClick={toggleText}
                className="bg-[#FFFFFF] pl-6 pr-6 rounded-[20px] text-[#1F2937]"
              >
                Income
              </button>
            )}
          </div>
          <div className="border mt-5 pt-3 pb-3 pl-4 pr-4 bg-[#F3F4F6] rounded-lg ">
            <p>Amount</p>
            <input
              className=" border-none bg-[#F3F4F6] outline-none "
              type="number"
              placeholder="₮ 000.0"
            />
          </div>
          <div className="mt-5">
            <p>Categoty</p>
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="w-[298px] border bg-[#F3F4F6] text-[#94A3B8] flex justify-between  mt-2 btn "
              >
                Choose
                <ArrowDropDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 scrollable_menu rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Food</a>
                </li>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Gift</a>
                </li>
                <li>
                  <a>Drink </a>
                </li>
                <li>
                  <a>Taxi</a>
                </li>
                <li>
                  <a>Shopping</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 w-[298px] border flex gap-2 ">
            <div className="w-[146px]">
              <p>Date</p>
              <div>
                <DatePickerComp />
              </div>
            </div>
            <div className="w-[146px]">
              <p>Time</p>
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-[348px] h-[420px] border p-6"></div>
      </div>
    </div>
  );
};
