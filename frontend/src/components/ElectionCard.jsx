import React from "react";

function ElectionCard({ election }) {
  return (
    <div className="w-full border border-gray-500/25 shadow-lg rounded-lg">
      <div className="grid grid-cols-3">
        <div className="">
            <img 
            src={election?.banner?.url} 
            alt={election?.title} 
            className="h-[300px] w-full"
            />
        </div>
        <div className="col-span-2 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl uppercase font-semibold text-cyan-400">{election?.title}</h2>
            <p>{election?.description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
                <p>Start Date: {election?.startDate}</p>
                <p>End Date: {election?.endDate}</p>
            </div>
            <div className="space-x-4">
                <button className="px-4 py-1 dark:bg-gray-300 text-black rounded cursor-pointer">View</button>
                <button className="px-4 py-1 dark:bg-blue-500 text-white rounded cursor-pointer">Edit</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectionCard;
