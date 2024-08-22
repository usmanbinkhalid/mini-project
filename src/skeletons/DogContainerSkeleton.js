import React from "react";

function DogContainerSkeleton() {
  return (
    <div className="flex flex-wrap justify-evenly animate-pulse [&>*]:bg-slate-100">
      <div className="flex w-80 h-96 rounded-2xl m-2 overflow-hidden relative">
        <div className="h-1/6 bg-slate-200 w-full absolute bottom-0"></div>
      </div>
      <div className="flex w-80 h-96 rounded-2xl m-2 overflow-hidden relative">
        <div className="h-1/6 bg-slate-200 w-full absolute bottom-0"></div>
      </div>
      <div className="flex w-80 h-96 rounded-2xl m-2 overflow-hidden relative">
        <div className="h-1/6 bg-slate-200 w-full absolute bottom-0"></div>
      </div>
      <div className="flex w-80 h-96 rounded-2xl m-2 overflow-hidden relative">
        <div className="h-1/6 bg-slate-200 w-full absolute bottom-0"></div>
      </div>
      <div className="flex w-80 h-96 rounded-2xl m-2 overflow-hidden relative">
        <div className="h-1/6 bg-slate-200 w-full absolute bottom-0"></div>
      </div>
      <div className="flex w-80 h-96 rounded-2xl m-2 overflow-hidden relative">
        <div className="h-1/6 bg-slate-200 w-full absolute bottom-0"></div>
      </div>
      <div className="flex w-80 h-96 rounded-2xl m-2 overflow-hidden relative">
        <div className="h-1/6 bg-slate-200 w-full absolute bottom-0"></div>
      </div>
      <div className="flex w-80 h-96 rounded-2xl m-2 overflow-hidden relative">
        <div className="h-1/6 bg-slate-200 w-full absolute bottom-0"></div>
      </div>
      <div className="flex w-80 h-96 rounded-2xl m-2 overflow-hidden relative">
        <div className="h-1/6 bg-slate-200 w-full absolute bottom-0"></div>
      </div>
      <div className="flex w-80 h-96 rounded-2xl m-2 overflow-hidden relative">
        <div className="h-1/6 bg-slate-200 w-full absolute bottom-0"></div>
      </div>
    </div>
  );
}

export default DogContainerSkeleton;
