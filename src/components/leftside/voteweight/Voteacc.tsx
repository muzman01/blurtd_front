import React from 'react'

export default function Voteacc() {
  return (
    <>
        <div className="flex justify-center  items-center ml-32 vote  ">
          <div className="block p-6 rounded-lg text-center shadow-lg bg-white w-96 h-96">
            <div>
            <span>Vote Weigth</span>
            </div>
            <div>
            <span className='font-medium text-3xl'>900 SP</span>
            </div>
            <div className='mt-5'>
                <span>Voting Power</span>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:'95%'}}> 95%</div>
                </div>
            </div>
            <div className='mt-5'>
                <span>Downvote Power</span>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:'45%'}}> 45%</div>
                </div>
            </div>
            <div className='mt-5'>
                <span>Resource Credits</span>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:'65%'}}> 65%</div>
                </div>
            </div>
            <div className='left-0  pl-5 pt-5 -ml-48'>
                <div>Regulation</div>
                <div>
                    25
                </div>
            </div>
            <div className='right-0  pr-5 pt-5 -mr-48 -mt-16'> 
                <div>
                    <span>AGE</span>
                </div>
                <div>
                    100 DAYS
                </div>
            </div>
          </div>
        </div>
    </>
  )
}
