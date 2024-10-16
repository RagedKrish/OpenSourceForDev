import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState({ username: 'JohnDoe' }); // Mock user state
    const [feed, setFeed] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [uploadedContent, setUploadedContent] = useState([]);
    const [newContent, setNewContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    // Fetch data from the backend
    const fetchData = async () => {
        setLoading(true);
        setError('');

        try {
            const [feedResponse, recommendationsResponse, uploadedContentResponse] = await Promise.all([
                fetch('https://your-backend-api.com/api/feed'),
                fetch('https://your-backend-api.com/api/recommendations'),
                fetch('https://your-backend-api.com/api/uploaded-content')
            ]);

            if (feedResponse.ok && recommendationsResponse.ok && uploadedContentResponse.ok) {
                const feedData = await feedResponse.json();
                const recommendationsData = await recommendationsResponse.json();
                const uploadedContentData = await uploadedContentResponse.json();

                setFeed(feedData);
                setRecommendations(recommendationsData);
                setUploadedContent(uploadedContentData);
            } else {
                setError('Failed to fetch data. Please try again later.');
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Handle content submission
    const handleUpload = async (e) => {
        e.preventDefault();
        if (!newContent.trim()) return;

        try {
            const response = await fetch('https://your-backend-api.com/api/upload-content', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: newContent }),
            });

            if (response.ok) {
                const uploadedData = await response.json();
                setUploadedContent([...uploadedContent, uploadedData]);
                setNewContent('');
            } else {
                setError('Failed to upload content. Please try again.');
            }
        } catch (err) {
            console.error('Error uploading content:', err);
            setError('An error occurred. Please try again later.');
        }
    };

    // Handle sign-out
    const handleSignOut = () => {
        // Clear user state (add actual sign-out logic here)
        setUser(null);
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="bg-darkBg text-darkText min-h-screen p-8">
            {/* User Profile Section */}
            <div className="flex items-center mb-8">
                {user ? (
                    <div className="flex justify-between items-center space-x-4 w-full">
                        <div className='flex items-center gap-4'>
                            <div className="bg-primaryPurple text-black p-2 w-12 rounded-s-full rounded-e-full flex justify-center">
                                <span className="text-2xl font-bold">{user.username.charAt(0)}</span>
                            </div>
                            <span className="text-white font-bold">{user.username}</span></div>
                        <button
                            onClick={handleSignOut}
                            className="bg-gray-800 p-2 rounded-md text-white font-bold"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <p className="text-white">Not logged in</p>
                )}
            </div>

            <h1 className="text-4xl font-bold text-white mb-6">Dashboard</h1>

            {loading && <p className="text-gray-400">Loading...</p>}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Upload Content Form */}
            <div className="bg-cardBg p-6 rounded-md mt-6 mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">Upload New Content</h2>
                <form onSubmit={handleUpload} className="flex space-x-3">
                    <input
                        type="text"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        placeholder="Enter your code or content here..."
                        className="w-full p-3 bg-gray-800 text-white rounded-md"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-primaryPurple p-3 rounded-md text-black font-bold"
                    >
                        Upload
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Feed Section */}
                <div className="bg-cardBg p-6 rounded-md">
                    <h2 className="text-2xl font-bold text-white mb-4">Feed</h2>
                    {feed.length > 0 ? (
                        <div className="mt-4 space-y-3">
                            {feed.map((item, index) => (
                                <p key={index} className="bg-gray-800 p-4 rounded-md">{item}</p>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400">No feed available.</p>
                    )}
                </div>

                {/* Recommendations Section */}
                <div className="bg-cardBg p-6 rounded-md">
                    <h2 className="text-2xl font-bold text-white mb-4">Recommendations</h2>
                    {recommendations.length > 0 ? (
                        <ul className="space-y-3">
                            {recommendations.map((recommendation, index) => (
                                <li key={index} className="bg-gray-800 p-4 rounded-md">
                                    {recommendation}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400">No recommendations available.</p>
                    )}
                </div>

                {/* Uploaded Code Content Section */}
                <div className="bg-cardBg p-6 rounded-md">
                    <h2 className="text-2xl font-bold text-white mb-4">Uploaded Content</h2>
                    {uploadedContent.length > 0 ? (
                        <ul className="space-y-3">
                            {uploadedContent.map((content, index) => (
                                <li key={index} className="bg-gray-800 p-4 rounded-md">
                                    {content}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400">No content uploaded yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
