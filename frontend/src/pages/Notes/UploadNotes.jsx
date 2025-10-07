import React, { useState } from "react";
import api from "../../api/axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "../../contexts/useAuth";
import { useNavigate } from "react-router-dom";

const departments = [
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electronics and Communication",
];

const semesters = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
];

function UploadNotes() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [semester, setSemester] = useState(user?.semester || "");
  const [department, setDepartment] = useState(user?.department || "");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !subject || !file || !semester || !department) {
      alert("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subject", subject);
    formData.append("description", description);
    formData.append("semester", semester);
    formData.append("department", department);
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await api.post("/notes/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        alert("Notes uploaded successfully 🎉");
        navigate("/profile");
      } else {
        alert(res.data.message || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading notes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-6 sm:p-10 lg:p-14 pt-20 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-900 rounded-3xl shadow-2xl p-8 flex flex-col gap-6 backdrop-blur-md bg-opacity-70 border border-gray-700"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center tracking-wide">
          Upload Your Notes 🚀
        </h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        {/* Description */}
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          className="w-full p-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Department */}
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        {/* Semester */}
        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">Select Semester</option>
          {semesters.map((sem) => (
            <option key={sem} value={sem}>
              {sem}
            </option>
          ))}
        </select>

        {/* File Upload */}
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full text-gray-300 bg-gray-800 border border-gray-700 p-3 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-bold text-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 ease-in-out transform hover:scale-105 disabled:opacity-60"
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Upload Notes"}
        </button>
      </form>
    </div>
  );
}

export default UploadNotes;
