import React, { useState } from "react";
import Button from "./Button";
import StartTest from "./StartTest";

const TypingTester = ({ setIsActive }) => {
  return (
    <div>
      <div className="bg-white h-[100vh] flex items-center justify-center px-[20rem]">
        <div className="bg-white border border-neutral-200 rounded-md py-[5rem] shadow-lg w-full">
          <h1 className="text-black text-3xl font-bold">Typing Speed Tester</h1>
          <p className="mt-[1.5rem] text-xl">
            Click the button below to start the test.
          </p>
          <Button
            className={`bg-slate-800 hover:bg-slate-700 mt-[3rem] text-white px-[5rem] py-2 rounded-md text-xl`}
            title={"Start"}
            onClick={() => setIsActive(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default TypingTester;
