// src/pages/Explore.jsx
import React, { useDebugValue, useEffect, useState } from "react";
import { useNotes } from "../../contexts/useNotes"; // adjust path if needed
import { Search } from "lucide-react"; // optional icon library
import CircularIndeterminate from "../../components/Loading/Loading"; // adjust path if needed
import NotesCard from "../../components/NotesCard/NotesCard"; // adjust path if needed

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
    <div className="relative p-6 max-w-full h-auto mx-auto z-1 !pt-20 !pr-10 !pl-10 !pb-10 ">
      {/* Search bar */}
      <div className="relative mb-8 flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Search by title, subject, department, or university..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[60%] pl-10 pr-4 py-2 rounded-4xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition h-9.5 !p-5 backdrop-blur-2xl bg-white/80"
        />
      </div>

      {/* Notes list */}
      {loading ? (
        <p className="flex justify-center items-center w-full h-screen"><CircularIndeterminate /></p>
      ) : notes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 !mt-8">
          {notes.map((note) => (
            <NotesCard note={note} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No notes found.</p>
      )}
    </div>
  );
}

export default Explore;
