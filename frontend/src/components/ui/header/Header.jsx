"use client";
import { HeaderIcon } from "@/components/icons/HeaderIcon";
import Link from "next/link";
import { AddRecords } from "../cards/AddRecord";

const Header = () => {
  return (
    <div className="pt-4 pb-4 flex justify-between ">
      <div className="flex gap-6 items-center ">
        <HeaderIcon />
        <Link href={"/dashboard"}>
          <p className="font-semibold text-[#0F172A]">Dashboard</p>
        </Link>

        <Link href={"/records"}>
          <p>Records</p>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <button
          className="btn btn-sm bg-[#0166FF] rounded-3xl text-[#FFFFFF] pl-3 pr-3 "
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          + Record
        </button>
        <dialog id="my_modal_2" className="modal">
          <AddRecords />
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <img className="w-[40px] h-[40px] border rounded-badge bg-black" />
      </div>
    </div>
  );
};
export default Header;
