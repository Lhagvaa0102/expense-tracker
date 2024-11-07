import { ArrowDropDown } from "@/components/icons/ArrowDropDown";
import { useState } from "react";

export const AddRecords = () => {
  const [isselected, setisSelected] = useState(true);
  const [colorchange, setcolorChange] = useState(true);
  const [transaction, setTransaction] = useState("");
  const toggleText = () => {
    setisSelected(!isselected);
  };
  const ChangeBgColor = (value) => {
    setisSelected(!isselected);
    setcolorChange(!colorchange);
    setTransaction(value);
  };
  return (
    <div className="modal-box max-w-[696px] h-[512px] p-0 ">
      <div className="border-b font-semibold text-xl pl-6 pr-6 pt-5 pb-5">
        Add Record
      </div>
      <div className="flex">
        <div className="w-[348px] h-[420px]  flex flex-col p-6">
          <div className="w-[300px] h-[40px] gap-1 flex rounded-[20px] bg-[#F3F4F6] ">
            <button
              onClick={() => {
                ChangeBgColor("EXP");
              }}
              className={`w-[148px] h-[40px] ${
                isselected
                  ? "bg-[#0166FF] text-white rounded-[20px]"
                  : "bg-[#F3F4F6] text-black rounded-[20px]"
              }`}
            >
              Expense
            </button>
            <button
              onClick={() => {
                ChangeBgColor("INC");
              }}
              className={`w-[148px] h-[40px] ${
                isselected
                  ? "bg-[#F3F4F6] text-black rounded-[20px]"
                  : "bg-[#16A34A] text-white rounded-[20px]"
              }`}
            >
              Income
            </button>
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
                className="w-[298px]  bg-[#F3F4F6] text-[#94A3B8] flex justify-between  mt-2 btn "
              >
                Choose
                <ArrowDropDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 scrollable_menu rounded-box z-[1] w-52  p-2 shadow"
              >
                <li>
                  <a>+ Add Category</a>
                </li>
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
          <div className="mt-5 w-[298px] flex gap-2 ">
            <div className="w-[146px]">
              <div>
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  name="createdat"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  required
                />
              </div>
            </div>
            <div className="w-[146px]">
              <div>
                <label className="block text-gray-700">Time</label>
                <input
                  type="time"
                  name="createdat"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <button
              className={`mt-8 btn h-[40px] text-[#FFFFFF] btn-sm btn-block rounded-[20px] ${
                colorchange ? "bg-[#0166FF]" : "bg-[#16A34A]"
              }`}
            >
              Add Record
            </button>
          </div>
        </div>
        <div className="w-[348px] h-[420px]  p-6">
          <div>
            <p>Name</p>
            <input
              type="text"
              className="w-full h-[48px] p-4 rounded-lg border bg-[#F9FAFB]"
              placeholder="Write here"
            />
          </div>
          <div className="mt-5">
            <p>Note</p>
            <textarea
              placeholder="Write here"
              className="h-[260px] w-full border rounded-lg p-4 bg-[#F9FAFB]"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
