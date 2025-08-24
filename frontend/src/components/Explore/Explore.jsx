// src/pages/Explore.jsx
import React, { useDebugValue, useEffect, useState } from "react";
import { useNotes } from "../../contexts/useNotes"; // adjust path if needed
import { Search } from "lucide-react"; // optional icon library
import CircularIndeterminate from "../Loading/Loading"; // adjust path if needed

function Explore() {
  const { notes, loading ,getAllNotes} = useNotes();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=>{
    getAllNotes();
  },[])

  // const filteredNotes = notes.filter((note) =>
  //   note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   note.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   note.university.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search by title, subject, department, or university..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Notes list */}
      {loading ? (
        <p className="flex justify-center items-center w-full h-[200px]"><CircularIndeterminate /></p>
      ) : notes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-bold text-gray-800">{note.title}</h2>
                {note.verified && (
                  <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                    Verified
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-3">{note.description}</p>

              {/* Info section */}
              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p><span className="font-semibold">Subject:</span> {note.subject}</p>
                <p><span className="font-semibold">Department:</span> {note.department}</p>
                <p><span className="font-semibold">University:</span> {note.university}</p>
                <p><span className="font-semibold">Semester:</span> {note.semester}</p>
                <p><span className="font-semibold">Uploaded By:</span> {note.uploadedBy}</p>
                <p><span className="font-semibold">Date:</span> {new Date(note.createdAt).toLocaleDateString()}</p>
              </div>

              {/* Footer */}
              <a
                href={note.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View / Download
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No notes found.</p>
      )}
    </div>
  );
}

export default Explore;
