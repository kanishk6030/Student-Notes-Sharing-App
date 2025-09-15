import React, { useEffect } from 'react'
import { useNotes } from "../../contexts/useNotes";
import { useAuth } from "../../contexts/useAuth";
import CircularIndeterminate from '../../components/Loading/Loading';
import NotesCard from '../../components/NotesCard/NotesCard';
import AnimatedBtn from '../../components/AnimatedBtn';

function Profile() {
  const { notes, userNotes, loading: notesLoading, getUserNotes ,getAllNotes} = useNotes();
  const { user, loading: authLoading } = useAuth();
  console.log("User Profile:", user);

  useEffect(() => {
    getUserNotes();
    getAllNotes();
  },[]);

    if (authLoading) {
        return <p className=" flex justify-center items-center w-full h-screen"><CircularIndeterminate/></p>;
      }

  console.log("authLoading:",authLoading)
  if (!user) {
  return <p className="p-6">You are not logged in</p>;
  }

  return (
    <div className='relative h-screen w-full flex !pt-14'>
      <div className='block1  w-[35%] flex flex-col items-center !pt-10 gap-5 backdrop-blur-xl bg-white/10 shadow-md !mr-2'>
        <div className='h-[45%] w-full flex flex-col items-center !pt-5 gap-5'>
          <div className='h-[40vh] w-[18vw] rounded-full'>
          <img className='h-full w-full object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1755856680228-60755545c4ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        </div>
        <div className='h-[55%] w-[90%]  '>
            <div className='flex flex-col items-start !pt-5 gap-5 !pl-10  !pb-5'>
              <h1 className='text-4xl font-bold text-center w-full bg-[#d9ccfd] !p-2 rounded-2xl '>{user.username}</h1>
              <p className='text-sm text-gray-600 font-medium'>Email:<span className='font-light'> {user.email}</span></p>
              <p className='text-sm text-gray-600 font-medium'>Department:<span className='font-light'>{user.department}</span></p>
              <p className='text-sm text-gray-600 font-medium'>Semester:<span className='font-light'> {user.semester}</span></p>
              <p className='text-sm text-gray-600 font-medium'>University:<span className='font-light'>{user.university}</span></p>

            </div>
        </div>
      </div>
      <div className='block2  w-[65%]'>
        <div className=' h-[75vh] w-full overflow-scroll flex  items-center flex-row flex-wrap overflow-x-hidden'>
          <h2 className='text-2xl font-bold backdrop-blur-2xl bg-transparent rounded-2xl shadow-md w-full h-10 text-center !mt-5'>My Notes</h2>
          <div className='!p-4'>
            {notesLoading ? (
              <p className=" flex justify-center items-center w-full h-screen"><CircularIndeterminate/></p>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 !mt-2">
                {userNotes.map((note) => (
                  <NotesCard note={note} />
                ))}
              </div>
              )
            }
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <AnimatedBtn
            to="/upload"
            btntext="Upload Your Notes"
          />
        </div>
      </div>
    </div>
  )
}

export default Profile