// src/pages/ExploreWithFilters.jsx
import React, { useState, useEffect } from "react";
import { useNotes } from "../../contexts/useNotes";
import CircularIndeterminate from "../../components/Loading/Loading";
import NotesCard from "../../components/NotesCard/NotesCard";

// Dummy data for dropdowns. You should replace this with data from your backend.
const departments = ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering"];
const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];
// const subjects = ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems", "Artificial Intelligence"];

function ExploreWithFilters() {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  //   // This is a placeholder. You'll likely want to call a specific API endpoint
  //   // to fetch notes based on the filters. For now, we'll get all notes.
  //   getAllNotes();
  // }, [getAllNotes]);

  const handleSearch = async () => {
  if (!selectedSemester || !selectedDepartment) {
    alert("Please select both Semester and Department");
    return;
  }

  setIsSearching(true);
  try {
    const res = await api.get(
      `/notes/${encodeURIComponent(selectedSemester)}/${encodeURIComponent(selectedDepartment)}`
    );

    if (res.data.success) {
      setFilteredNotes(res.data.notes);
    } else {
      setFilteredNotes([]);
      console.warn(res.data.message);
    }
  } catch (error) {
    console.error("Error fetching notes:", error.response?.data || error.message);
    setFilteredNotes([]);
  } finally {
    setIsSearching(false);
  };
 };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-6 sm:p-10 lg:p-14 pt-20 flex flex-col items-center">
      <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 w-full max-w-4xl backdrop-blur-md bg-opacity-70 border border-gray-700">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center tracking-wide">
          Find Notes by Filters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Department Dropdown */}
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          {/* Semester Dropdown */}
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
          >
            <option value="">Select Semester</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>

        </div>

        {/* Search Button */}
        <div className="text-center">
          <button
            onClick={handleSearch}
            className="w-full md:w-auto bg-purple-600 text-white py-3 px-10 rounded-xl font-bold text-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Search Notes
          </button>
        </div>
      </div>

      {/* Notes list */}
      <div className="mt-12 w-full max-w-6xl">
        {isSearching ? (
          <p className="flex justify-center items-center h-[50vh]">
            <CircularIndeterminate />
          </p>
        ) : filteredNotes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredNotes.map((note) => (
              <NotesCard key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-xl mt-10">No notes found for the selected filters.</p>
        )}
      </div>
    </div>
  );
}

export default ExploreWithFilters;