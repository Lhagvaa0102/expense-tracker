export const CashCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(./Noise.png)`,
        width: "384px",
        height: "216px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[384px] border h-[216px] rounded-[18px] bg-[#0166FF]"
    >
      <div className="pl-8 pt-8 ">
        <div className="flex flex-col ">
          <img className="w-[100px]  h-[40px]" src="CardLogo.png" />
        </div>
        <div className="text-[#ffffff] mt-12  ">
          <p className="text-gray-300">Cash</p>
          <p className="font-semibold text-2xl">10,000,000</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
