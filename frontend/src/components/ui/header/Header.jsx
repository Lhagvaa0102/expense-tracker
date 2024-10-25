import { HeaderIcon } from "@/components/icons/HeaderIcon";
import Link from "next/link";

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
        <button className="bg-[#0166FF] text-[#FFFFFF]  h-[32px] pl-3 pr-3 rounded-xl ">
          + Record
        </button>
        <img className="w-[40px] h-[40px] border rounded-badge bg-black" />
      </div>
    </div>
  );
};
export default Header;
