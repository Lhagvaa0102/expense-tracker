import { useState } from "react";

export const AddRecords = () => {
  const [isselected, setisSelected] = useState(true);
  const [change, setChange] = useState();
  const toggleText = () => {
    setisSelected(!isselected);
  };
  return (
    <div className="modal-box max-w-[792px] h-[512px] p-0 ">
      <div className="border-b font-semibold text-xl pl-6 pr-6 pt-5 pb-5">
        Add Record
      </div>
      <div className="w-[348px] pt-5 pb-5 pr-6 pl-6">
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
      </div>
      <div></div>
    </div>
  );
};
