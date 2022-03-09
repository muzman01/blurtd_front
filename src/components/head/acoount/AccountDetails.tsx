import React from 'react'

export default function AccountDetails() {
  return (
    <>
        <div className="container flex flex-wrap justify-between items-center mx-auto pt-9">
            <div className='content-start ml-28'>
                <span className='text-4xl'>@POST24</span>
            </div>
            <div className='content-end mr-28'>
                <div className=' container flex flex-wrap  border border-black w-32 items-center mx-auto'>
                    <ul className='mx-auto pt-2 pb-2'>
                        <li> <span>10000 sp</span></li>
                        <li><span>10000 steem</span></li>
                        <li> <span>10000 sbd</span></li>
                    </ul>
                </div>    
            </div>
        </div>
    </>
  )
}
