import Link from "next/link";
import { LogoIcon } from "../icons/LogoIcon";

const SignupPage = () => {
  return (
    <div className="flex ">
      <div className="w-[55%] h-screen flex items-center justify-center ">
        <div className="w-[384px]  flex flex-col gap-3 justify-center items-center ">
          <LogoIcon />
          <h1 className="font-semibold text-2xl">Create Geld Account</h1>
          <p>Sign up below to create your Wallet account</p>
          <form className="flex flex-col gap-3 w-full" action="">
            <input
              className="h-[48px] w-full border rounded pl-3 bg-[#F3F4F6] "
              placeholder="Name"
              type="text"
              name="name"
            />
            <input
              className="h-[48px] w-full border rounded pl-3 bg-[#F3F4F6] "
              placeholder="Email"
              type="text"
              name="email"
            />
            <input
              className="h-[48px] w-full border rounded pl-3 bg-[#F3F4F6] "
              placeholder="Password"
              type="password"
              name="password"
            />
            <input
              className="h-[48px] w-full border rounded pl-3 bg-[#F3F4F6] "
              placeholder="Re-Password"
              type="password"
              name="password"
            />

            <button className="btn w-full rounded-3xl text-white bg-[#0166FF] ">
              Sign up
            </button>
          </form>

          <div className="flex gap-3">
            <p>Already have account?</p>
            <Link className="text-[#0166FF]" href={"/"}>
              log in
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] h-screen w-[45%]"></div>
    </div>
  );
};
export default SignupPage;
