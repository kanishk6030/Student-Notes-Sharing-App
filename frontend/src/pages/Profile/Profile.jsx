import React, { useEffect } from 'react';
import { useNotes } from '../../contexts/useNotes';
import { useAuth } from '../../contexts/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import NotesCard from '../../components/NotesCard/NotesCard';
import { Link } from 'react-router-dom';

function Profile() {
  const { userNotes, loading: notesLoading, getUserNotes } = useNotes();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    getUserNotes();
  }, []);

  if (authLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-gray-400">
        <CircularProgress color="inherit" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6 text-center text-gray-400 h-screen flex justify-center items-center bg-gray-900">
        You are not logged in.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-6 sm:p-10 lg:p-14 pt-20 flex justify-center items-center">
      {/* Profile Section */}
      <div className="w-full max-w-lg bg-gray-900 rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center backdrop-blur-md bg-opacity-70 border border-gray-700 h-fit">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-purple-500 ring-offset-4 ring-offset-gray-900">
          <img
            className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1755856680228-60755545c4ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-wide font-sans">
          {user.username}
        </h1>
        <p className="text-sm text-gray-400 mb-6 font-mono">{user.email}</p>
        <div className="w-full text-left space-y-3 font-light">
          <p className="flex justify-between items-center text-gray-300">
            <span className="font-semibold text-gray-400">Department:</span>
            <span className="text-right">{user.department}</span>
          </p>
          <p className="flex justify-between items-center text-gray-300">
            <span className="font-semibold text-gray-400">Semester:</span>
            <span className="text-right">{user.semester}</span>
          </p>
          <p className="flex justify-between items-center text-gray-300">
            <span className="font-semibold text-gray-400">University:</span>
            <span className="text-right">{user.university}</span>
          </p>
        </div>
        <Link to="/upload" className="mt-8 w-full">
          <button
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-bold text-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Upload Your Notes 🚀
          </button>
        </Link>
        <Link to="/" className="mt-4 w-full">
          <button
            className="w-full bg-gray-700 text-white py-3 px-6 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Go to Dashboard 🏠
          </button>
        </Link>
        <div className="w-full flex justify-between mt-4 space-x-2">
          <Link to="/edit-profile" className="w-1/2">
            <button
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              Edit Profile
            </button>
          </Link>
          <Link to="/change-password" className="w-1/2">
            <button
              className="w-full bg-orange-600 text-white py-3 px-6 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              Change Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;