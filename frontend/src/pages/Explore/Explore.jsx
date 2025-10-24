// Explore.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiAlertCircle, FiX } from 'react-icons/fi'; // Import icons

const Explore = () => {
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');
    const [branches, setBranches] = useState([]);
    const [semesters, setSemesters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const navigate = useNavigate();

    // Simulating an API call to get branches and years
    useEffect(() => {
        setIsLoading(true);
        // Replace this with your actual API call
        const fetchedData = {
            branches: ['Computer Science', 'Electrical', 'Mechanical', 'Civil', 'Information Technology'],
            semesters: ['1', '2', '3', '4', '5', '6', '7', '8']
        };
        setBranches(fetchedData.branches);
        setSemesters(fetchedData.semesters);
        setIsLoading(false);
    }, []);

    const handleSearch = () => {
        if (selectedBranch && selectedSemester) {
            setShowAlert(false); // Hide the alert if all fields are selected
            const encodedBranch = selectedBranch.replace(/\s+/g, '-').toLowerCase();
            navigate(`/explore/${encodedBranch}/${selectedSemester}`);
        } else {
            // Display a custom alert message
            setAlertMessage('Please select both a branch and a semester.');
            setShowAlert(true);
            // Optionally, hide the alert after a few seconds
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center  p-4 relative z-10'>
            <div className='p-8 bg-white rounded-lg shadow-md w-full max-w-md space-y-6'>
                <h1 className='text-3xl font-bold text-center text-gray-800'>Find Your Notes</h1>
                
                {/* Custom Alert */}
                {showAlert && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center justify-between transition-all duration-300 transform scale-100 animate-fade-in-up" role="alert">
                        <div className="flex items-center">
                            <FiAlertCircle className="mr-3" />
                            <span className="block sm:inline">{alertMessage}</span>
                        </div>
                        <button onClick={() => setShowAlert(false)} className="text-red-700 hover:text-red-900 ml-4">
                            <FiX />
                        </button>
                    </div>
                )}
                
                <div className='space-y-4'>
                    <select
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
                    >
                        <option value="">Select Branch</option>
                        {branches.map(branch => (
                            <option key={branch} value={branch}>{branch}</option>
                        ))}
                    </select>

                    <select
                        value={selectedSemester}
                        onChange={(e) => setSelectedSemester(e.target.value)}
                        className='block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
                    >
                        <option value="">Select Semester</option>
                        {semesters.map(semester => (
                            <option key={semester} value={semester}>{semester}</option>
                        ))}
                    </select>
                </div>
                
                <button
                    onClick={handleSearch}
                    className='w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300'
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Explore;