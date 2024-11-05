import { AddRecords } from "./AddRecord";

export const RecordsCard = () => {
  return (
    <div className="w-[290px] h-[800px] bg-[#FFFFFF] rounded-xl flex items-start pt-6 pb-6 pl-4 pr-4">
      <div className="flex flex-col gap-6">
        <p className="font-semibold text-2xl">Records</p>

        <button
          className="btn btn-sm btn-wide bg-[#0166FF] rounded-3xl text-[#FFFFFF] pl-3 pr-3 "
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          + Add
        </button>
        <dialog id="my_modal_2" className="modal">
          <AddRecords />
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <input
          className="rounded-lg border pl-4 pt-1 pb-1 bg-[#F3F4F6]"
          type="text"
          placeholder="Search"
        />
        <div className="flex flex-col gap-5 ">
          <p className="font-semibold ">Types</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="radio-1"
                className="radio-sm"
                defaultChecked
              />
              <p>All</p>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" name="radio-1" className="radio-sm" />
              <p>Income</p>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" name="radio-1" className="radio-sm" />
              <p>Expense</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">Category</p>
          </div>
        </div>
      </div>
    </div>
  );
};
