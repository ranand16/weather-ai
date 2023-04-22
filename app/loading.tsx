import { SunIcon } from "@heroicons/react/solid";
import React from "react";

function loading() {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500">
      <div className="w-full flex items-center justify-center m-auto">
        <SunIcon
          className="h-24 w-24 animate-bounce text-yellow-500 m-auto"
          color="yellow"
        />
      </div>

      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading City Waether Information
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on, we are crunching the numbers & generating an AI summary of the
        weather!
      </h2>
    </div>
  );
}

export default loading;
