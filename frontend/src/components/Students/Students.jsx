import React, { useEffect } from 'react'
import { useUsers } from '../../contexts/useUsers'
import CircularIndeterminate from '../Loading/Loading'
import ImgMediaCard from "../UserCards/UserCards"

function Students() {
  const { users, loading, getAllUsers } = useUsers();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="px-6 py-8 min-h-screen bg-gray-50">
      {loading && (
        <div className="flex justify-center items-center h-[60vh]">
          <CircularIndeterminate />
        </div>
      )}

      {!loading && users.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No users found.</p>
      )}

      {!loading && users.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {users?.map(user => (
            <li key={user.id} className="flex justify-center">
              <ImgMediaCard 
                username={user.username}
                email={user.email}
                department={user.department}
                semester={user.semester}
                university={user.university}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Students;
