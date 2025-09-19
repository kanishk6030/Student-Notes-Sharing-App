// PyqsResults.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FiDownload, FiExternalLink, FiAlertCircle, FiLoader } from 'react-icons/fi'; // Import icons

const PyqsResults = () => {
    const { branch, year } = useParams();
    const [pyqs, setPyqs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPyqs = async () => {
            try {
                setIsLoading(true);
                setError(null); // Clear previous errors
                const response = await axios.get(`https://your-api.com/api/pyqs`, {
                    params: {
                        branch: branch,
                        year: year
                    }
                });
                setPyqs(response.data);
            } catch (err) {
                console.error("Error fetching PYQs:", err);
                setError("Failed to load PYQs. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPyqs();
    }, [branch, year]); // Re-fetch when branch or year changes

    // Function to handle download (can be a direct link or trigger a backend download)
    const handleDownload = (url, title) => {
        // For direct downloads if your server is configured for it or if it's a direct PDF link
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${title}.pdf`); // Suggests a filename
        document.body.appendChild(link);
        link.click();
        link.remove();
        // If your backend handles the download, you might call another API:
        // axios.get(`/api/download-pyq?url=${encodeURIComponent(url)}`, { responseType: 'blob' })
        // .then(response => { /* handle blob download */ });
    };

    const displayBranchName = branch.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 pt-20">
            <div className="container mx-auto max-w-5xl bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-[1.005] animate-fade-in">
                
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight leading-tight">
                    <span className="text-blue-600">{displayBranchName}</span> Branch PYQs - {year}
                </h2>

                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-12 text-blue-600">
                        <FiLoader className="animate-spin text-5xl mb-4" />
                        <p className="text-xl font-medium">Loading Previous Year Questions...</p>
                    </div>
                )}

                {error && (
                    <div className="flex flex-col items-center justify-center py-12 text-red-600 bg-red-50 rounded-lg p-6 animate-fade-in-up">
                        <FiAlertCircle className="text-5xl mb-4" />
                        <p className="text-xl font-medium text-center">{error}</p>
                        <p className="text-md text-red-500 mt-2">Please check your internet connection or try again later.</p>
                    </div>
                )}

                {!isLoading && !error && pyqs.length > 0 && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                        {pyqs.map((item, index) => (
                            <li
                                key={item.id}
                                className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg shadow-lg border border-gray-100
                                           flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                                           hover:border-blue-200 animate-slide-in"
                                style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
                            >
                                <div className="flex-grow mb-4">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    {/* You can add more details here if your item object has them, e.g., subject */}
                                    {/* <p className="text-sm text-gray-500">Subject: {item.subject}</p> */}
                                </div>
                                <div className="flex justify-between items-center space-x-3">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md
                                                   hover:bg-blue-600 transition duration-300 text-sm font-medium flex-grow justify-center"
                                    >
                                        <FiExternalLink className="text-lg" />
                                        <span>View</span>
                                    </a>
                                    <button
                                        onClick={() => handleDownload(item.url, item.title)}
                                        className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-md
                                                   hover:bg-green-600 transition duration-300 text-sm font-medium flex-grow justify-center"
                                    >
                                        <FiDownload className="text-lg" />
                                        <span>Download</span>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {!isLoading && !error && pyqs.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-gray-600 bg-white rounded-lg p-6 text-center animate-fade-in-up">
                        <img src="https://via.placeholder.com/150/E0E7FF/4338CA?text=No+PYQs" alt="No PYQs found" className="mb-6 rounded-lg"/>
                        <p className="text-xl font-medium mb-2">No PYQs found for {displayBranchName} - {year}</p>
                        <p className="text-md text-gray-500">
                            It seems there are no previous year questions available for this selection yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PyqsResults;