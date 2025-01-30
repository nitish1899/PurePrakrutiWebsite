import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import pure from '../resource/co2.png';

export const CarbonFootprint = () => {
    const [formData, setFormData] = useState({
        VechileNumber: '',
        SourcePincode: '',
        DestinationPincode: '',
        MobilisationDistance: '',
        DeMobilisationDistance: '',
        LoadedWeight: '',
    });
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [showSignupMessage, setShowSignupMessage] = useState(false); // For signup prompt

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setResponse(null);
        setShowSignupMessage(false);

        try {
            // Check for `userId` in cookies
            const userId = Cookies.get('userId');

            // Check if the carbon footprint API has already been called
            const isFirstTime = localStorage.getItem('isFirstTime') !== 'false'; // By default, it's true

            if (!userId) {
                if (isFirstTime) {
                    // First-time submission without userId
                    const { data } = await axios.post('http://localhost:4500/api/vehicle/getCabonFootPrints', formData);

                    // Save the response and show a signup message for subsequent interactions
                    setResponse(data);
                    setShowSignupMessage(true);

                    // Set the flag to false after the first submission
                    localStorage.setItem('isFirstTime', 'false');
                } else {
                    // If it's not the first time, prompt the user to sign up or log in
                    setShowSignupMessage(true);
                }
            } else {
                // User is logged in, fetch carbon emission details
                const { data } = await axios.post('http://localhost:4500/api/vehicle/findCO2Emission', {
                    ...formData,
                    userId,
                });
                setResponse(data);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while fetching data.');
        }
    };

    const closeModal = () => {
        setResponse(null);
        setFormData({
            VechileNumber: '',
            SourcePincode: '',
            DestinationPincode: '',
            MobilisationDistance: '',
            DeMobilisationDistance: '',
            LoadedWeight: '',
        });
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${pure})`,
            }}
        >
            <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-md w-full max-w-md m-8">
                <h1 className="text-3xl font-bold text-center mb-6">Carbon Footprint Calculator</h1>


                <form onSubmit={handleSubmit} className="space-y-4">
                    {['VechileNumber', 'SourcePincode', 'DestinationPincode', 'LoadedWeight'].map((field) => (
                        <div key={field}>
                            <label className="block text-sm font-medium mb-2" htmlFor={field}>
                                {field.replace(/([A-Z])/g, ' $1').trim()}:
                            </label>
                            <input
                                type="text"
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                    >
                        Submit
                    </button>
                </form>

                {error && <p className="mt-4 text-red-500 text-center">Error: {error}</p>}

                {response && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
                            <h2 className="text-xl font-bold mb-4">Emission Details</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>CO2 Emission:</strong> {response.co2Emission} kg</li>
                                <li><strong>Vehicle Number:</strong> {response.vehicleNumber}</li>
                                <li><strong>Certificate Issue Date:</strong> {response.certificateIssueDate}</li>
                                <li><strong>Certificate Number:</strong> {response.certificateNumber}</li>
                            </ul>
                            <button
                                onClick={closeModal}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {showSignupMessage && (
                    <p className="mt-4 text-center text-blue-600">
                        Please <a href="/" className="underline font-medium">sign up</a> to continue tracking your carbon emissions.
                    </p>
                )}
            </div>
        </div>
    );
};