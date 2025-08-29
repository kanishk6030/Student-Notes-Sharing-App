import React from 'react'

function Profile() {
  return (
    <div className='relative h-screen w-full flex !pt-14'>
      <div className='block1  w-[35%] flex flex-col items-center !pt-10 gap-5'>
        <div className='h-[45%] w-full flex flex-col items-center !pt-5 gap-5'>
          <div className='h-[40vh] w-[18vw] rounded-full'>
          <img className='h-full w-full object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1755856680228-60755545c4ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        </div>
        <div className='h-[55%] w-[90%] '>
            <div className='flex flex-col items-start !pt-5 gap-5 !pl-10 backdrop-blur-2xl bg-transparent rounded-2xl shadow-md !pb-5'>
              <h1 className='text-4xl font-bold'>Kanishk</h1>
              <p className='text-sm text-gray-600 font-medium'>Email:<span className='font-light'> kanishk@example.com</span></p>
              <p className='text-sm text-gray-600 font-medium'>Department:<span className='font-light'>Information Technology</span></p>
              <p className='text-sm text-gray-600 font-medium'>Semester:<span className='font-light'> 5</span></p>
              <p className='text-sm text-gray-600 font-medium'>University:<span className='font-light'>Cochin Universty of Science and Technology</span></p>

            </div>
        </div>
      </div>
      <div className='block2 bg-amber-800 w-[65%]'></div>
    </div>
  )
}

export default Profile