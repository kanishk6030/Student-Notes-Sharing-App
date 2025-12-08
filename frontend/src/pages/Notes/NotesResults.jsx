import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";
import CircularProgress from "@mui/material/CircularProgress";
import NotesCard from "../../components/NotesCard/NotesCard";

function NotesResults() {
  const { department, semester } = useParams();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get(
          `/notes/explore?department=${department}&semester=${semester}`
        );
        setNotes(response.data.notes);
      } catch (err) {
        setError("Failed to fetch notes. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (department && semester) {
      fetchNotes();
    }
  }, [department, semester]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Explore Notes
        </h1>
        {notes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notes.map((note) => (
              <NotesCard key={note._id} note={note} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <p className="text-xl">No notes found for your search.</p>
            <p>Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesResults;
