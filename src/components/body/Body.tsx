import React from 'react'
import Card from './Card/Card'
import CardVote from './Card/CardVote'
import Cardbenef from './Card/Cardbenef'
import Cardclaim from './Card/Cardclaim'
import Cardsbd from './Card/Cardsbd'
import Cardtransfer from './Card/Cardtransfer'
export default function Body() {
  return (
    <>
        <div className='mt-28 cardbody'>
          <Card /> 
          <Cardsbd />
          <Cardclaim />
          <Cardbenef />
          <CardVote />
          <Cardtransfer /> 
          <Card /> 
          <Cardsbd />
          <Cardclaim />
          <Cardbenef />
          <CardVote />
          <Cardtransfer /> 
          <div className="flex justify-center ml-96 mt-3 content-center">
          <div className="block p-6 rounded-lg shadow-lg border-2 border-gray-100 h-16 cardw items-center ">
             <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
               <li className='border-x-2 border-blue-700 pl-2 w-7 cursor-pointer'>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li className='  border-b border-blue-600 cursor-pointer' >next page</li>
             </ul>
          </div>
        </div>
        </div>

    </>
  )
}
