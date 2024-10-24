"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "GeeksforGeeks Bar Chart",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const BarChart = () => {
  return (
    <div style={{ width: "700px", height: "700px" }}>
      <h1>Example 2: Bar Chart</h1>
      <Bar data={data} />
    </div>
  );

  //   return (
  //     <div className="w-[588px] h-[284px] rounded-xl bg-[#FFFFFF]">
  //       <div className=" border-b pl-6 pr-6 pt-4 pb-4 ">
  //         <p className="text-[#0F172A] font-semibold"> Income-Expense</p>
  //       </div>
  //       <div className="pt-8 pb-8 pl-6 pr-6">
  //         <div className="flex flex-col text-sm font-normal gap-[18px]">
  //           <p>3,000,000</p>
  //           <p>2,000,000</p>
  //           <p>1,000,000</p>
  //           <p>0</p>
  //         </div>
  //         <div></div>
  //       </div>
  //     </div>
  //   );
};
