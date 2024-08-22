import React from 'react'

function DogSkeleton() {
  return (
    <div className="flex animate-pulse [&>*]:bg-slate-200 p-2 justify-center mt-20">
      <div className="flex w-80 h-96 rounded-2xl mx-20 overflow-hidden relative">
        <div className="h-1/6 bg-slate-300 w-full absolute bottom-0"></div>
      </div>
      <div className='w-[600px] p-4 rounded-2xl'><div class="w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px]"></div>
    </div></div>
      </div>
  )
}

export default DogSkeleton