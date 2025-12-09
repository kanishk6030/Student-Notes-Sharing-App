import React, { useEffect } from 'react';
import { useNotes } from '../../contexts/useNotes';
import { useAuth } from '../../contexts/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiBook, FiBriefcase, FiUpload, FiHome, FiEdit, FiLock } from 'react-icons/fi';

function Profile() {
  const { userNotes, loading: notesLoading, getUserNotes } = useNotes();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    getUserNotes();
  }, []);

  if (authLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <CircularProgress />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6 text-center text-gray-500 h-screen flex justify-center items-center bg-gray-100">
        You are not logged in. Please <Link to="/login" className="text-indigo-600 hover:underline">login</Link> to view your profile.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-white ring-opacity-50">
            <img
              className="w-full h-full object-cover"
              src={user.profilePicture || "https://plus.unsplash.com/premium_photo-1755856680228-60755545c4ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"}
              alt="Profile"
            />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wide">
            {user.username}
          </h1>
          <p className="text-md text-gray-200 flex items-center">
            <FiMail className="mr-2" /> {user.email}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          <div className="bg-white bg-opacity-10 rounded-xl p-4 flex items-center">
            <FiBook className="mr-3 text-2xl" />
            <div>
              <p className="font-semibold">Department</p>
              <p className="text-gray-200">{user.department}</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-4 flex items-center">
            <FiBriefcase className="mr-3 text-2xl" />
            <div>
              <p className="font-semibold">Semester</p>
              <p className="text-gray-200">{user.semester}</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 bg-white bg-opacity-10 rounded-xl p-4 flex items-center">
            <FiBriefcase className="mr-3 text-2xl" />
            <div>
              <p className="font-semibold">University</p>
              <p className="text-gray-200">{user.university}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <Link to="/notes/upload">
            <button className="w-full flex items-center justify-center bg-white text-indigo-600 py-3 px-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-colors duration-300">
              <FiUpload className="mr-2" /> Upload Notes
            </button>
          </Link>
          <Link to="/">
            <button className="w-full flex items-center justify-center bg-white text-indigo-600 py-3 px-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-colors duration-300">
              <FiHome className="mr-2" /> Dashboard
            </button>
          </Link>
          <Link to="/edit-profile">
            <button className="w-full flex items-center justify-center bg-white text-indigo-600 py-3 px-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-colors duration-300">
              <FiEdit className="mr-2" /> Edit Profile
            </button>
          </Link>
          <Link to="/change-password">
            <button className="w-full flex items-center justify-center bg-white text-indigo-600 py-3 px-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-colors duration-300">
              <FiLock className="mr-2" /> Change Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
