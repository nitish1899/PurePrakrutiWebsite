import React, { useState, useContext } from 'react';
import axios from 'axios';
// import Cookies from 'js-cookie';
// import pure from '../resource/co2.png';
import { AuthContext } from "../AuthContext";
import Cookies from 'js-cookie';
import pure from '../resource/PurePrakritibgImg.jpg';
import downloadIcon from '../resource/Vector.png';
import { AiOutlineClose } from "react-icons/ai";
import html2pdf from "html2pdf.js";


export const CarbonFootprint = () => {
     const authContext = useContext(AuthContext);
     const user = authContext?.user;
     const userId = user?.userId;

    const [formData, setFormData] = useState({
        VechileNumber: '',
        SourcePincode: '',
        DestinationPincode: '',
        MobilisationDistance: '',
        DemobilisationDistance: '',
        LoadedWeight: '',
    });
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [showSignupMessage, setShowSignupMessage] = useState(false); // For signup prompt

    const userName = Cookies.get("userName"); // Get the userId from cookies


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.toUpperCase(),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setResponse(null);
        setShowSignupMessage(false);

        try {
            // Check for `userId` in cookies
            // const userId = Cookies.get('userId');

            // Check if the carbon footprint API has already been called
            const isFirstTime = localStorage.getItem('isFirstTime') !== 'false'; // By default, it's true

            if (!userId) {
                if (isFirstTime) {
                    // First-time submission without userId
                    const { data } = await axios.post('http://192.168.1.8:4500/api/vehicle/getCabonFootPrints', formData);

                    // Save the response and show a signup message for subsequent interactions
                    setResponse(data);
                    setShowSignupMessage(true);

                    // Set the flag to false after the first submission
                    // localStorage.setItem('isFirstTime', 'false');
                } else {
                    // If it's not the first time, prompt the user to sign up or log in
                    setShowSignupMessage(true);
                }
            } else {
                // User is logged in, fetch carbon emission details
                const { data } = await axios.post('http://192.168.1.8:4500/api/vehicle/findCO2Emission', {
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


    const pdfTemplate = `<div
        style="font-family: 'Playfair Display', serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f8f9fa; margin: 0;">

        <div
            style="border: 10px solid #D4AF37; padding: 30px; width: 700px; text-align: center; background-color: #fff; box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); position: relative; background: url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png');">

            <!-- Logos Section -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                <div style="display: flex; flex-direction: column;">
                    <a target="blank" href="https://dpiit.gov.in">
                        <img src="/DPIIT.png" alt="DPIIT Logo" style="height: 20px; margin-bottom: 5px;">
                    </a>
                    <a href="https://www.startupindia.gov.in">
                        <img src="StartupIndia.png"
                            alt="Startup India Logo" style="height: 20px; margin-bottom: 5px;">
                    </a>
                </div>
                <div>
                    <img src="/pureprukriti.png" alt="TSIL Logo"
                        style="height: 60px; width: 60px; margin-right: 5px; margin-bottom: 5px;">
                </div>
            </div>

            <!-- Certificate Header -->
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 16px;">Certificate Number: <span
                        style="font-weight: bold; color: #2c3e50;" id="certificateNumber">${response && response.certificateNumber}</span></p>
                <p style="margin: 0; font-size: 16px;">Date: <span style="font-weight: bold; color: #2c3e50;"
                        id="date">${response && response.certificateIssueDate}</span></p>
            </div>

            <h1
                style="font-size: 36px; margin-bottom: 20px; font-style: italic; font-family: 'Magnolia Script', cursive; color: #D4AF37;">
                Certificate of CO2 Emission</h1>

            <p style="font-size: 18px; margin: 10px 0;">This is to certify that the vehicle owned/hired by</p>
            <p style="font-size: 18px; margin: 10px 0; font-weight: bold; color: #2c3e50;" id="vehicleOwner">${userName ? userName : "Name"}</p>
            <p style="font-size: 18px; margin: 10px 0;">with vehicle number</p>
            <p style="font-size: 18px; margin: 10px 0; font-weight: bold; color: #2c3e50;" id="vehicleNumber">${response && response.vehicleNumber}</p>
            <p style="font-size: 18px; margin: 10px 0;">has emitted</p>
            <p style="font-size: 18px; margin: 10px 0;"><span style="font-weight: bold; color: #2c3e50;"
                    id="co2Emission">${response && (response.co2Emission / 1000).toFixed(1)}</span> unit CO2</p>

            <!-- Signature Section -->
            <div style="margin-top: 40px; text-align: right; ">
                <img src="/signature.png" alt="Signature"
                    style="height: 50px; width: 150px; margin-left: 480px;">
                <p>Authorized Signature</p>
            </div>

            <!-- Issuer Section -->
            <div style="margin-top: 40px; text-align: center;">
                <p>Issued by:</p>
                <p style="font-weight: bold; color: #2c3e50;">Transvue Solution India Pvt. Ltd.</p>
            </div>

            <!-- Info Section -->
            <div style="display: flex;">
                <div style="text-align: left; margin: 5px 0; font-size: 7px;">
                    <p>* The above result is based on user input.</p>
                    <p>* Additional details are based on US/UK research.</p>
                </div>
                <div style="margin-left: auto; margin-right: 1px;">
                    <p>Time: <span style="font-weight: bold; color: #2c3e50;" id="time">${new Date().toLocaleTimeString()}</span></p>
                </div>
            </div>
        </div>
    </div>

    <script>
        window.onload = function () {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const dateStr = now.toLocaleDateString('en-US', options);
            const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
            document.getElementById('date').innerText = dateStr;
            document.getElementById('time').innerText = timeStr;
        };
    </script>`;

    // Function to Download PDF
    const downloadPDF = (blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "certificate.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const generatePDF = () => {

        const options = {
            margin: 10,
            filename: 'certificate.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, allowTaint: true, imageTimeout: 0 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(options).from(pdfTemplate).toPdf().output('blob').then(blob => {
            // Trigger download
            downloadPDF(blob);
            // Upload to AWS S3
            // uploadPDFToS3(blob);
        });
    };

    return (
        <div
            className=" items-center justify-center bg-cover bg-center bg-opacity-40"
            style={{
                backgroundImage: `url(${pure})`,
            }}
        >
            <div>
                <h1 className="pt-8 text-3xl font-bold text-center mb-4 text-green-500">Carbon Footprint Calculator</h1>
            </div>
            <div className="flex justify-center items-center bg-opacity-40 p-8">
                <div className="bg-[#E3F4EA66] p-8 rounded-lg shadow-md w-full max-w-2xl">
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {['VechileNumber', 'SourcePincode', 'DestinationPincode', 'MobilizationDistance', 'DemobilizationDistance', 'LoadedWeight'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium mb-2" htmlFor={field}>
                                        {field.replace(/([A-Z])/g, ' $1').trim()}{['MobilizationDistance', 'DemobilizationDistance'].includes(field) ? '' : '*'}
                                    </label>
                                    <input
                                        type="text"
                                        id={field}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        required={!['MobilizationDistance', 'DemobilizationDistance'].includes(field)}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 justify-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-900 focus:ring-2 focus:ring-blue-300"
                            >
                                Get Result
                            </button>
                        </div>
                    </form>

                    {error && <p className="mt-4 text-red-500 text-center">Error: {error}</p>}

                    {response &&
                        (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:w-3/4 lg:w-1/2 xl:w-1/3 relative">

                                    {/* Close Icon */}
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                                    >
                                        <AiOutlineClose size={24} />
                                    </button>

                                    <h2 className="text-3xl font-bold mb-4 text-center text-green-700">Emission Details</h2>

                                    <div className="pl-5 space-y-2 text-green-800">
                                        <p><strong>Total CO2 Emission:</strong> {response.co2Emission} kg</p>
                                        <p><strong>Vehicle Number:</strong> {response.vehicleNumber}</p>
                                        <p><strong>Certificate Issue Date:</strong> {response.certificateIssueDate}</p>
                                        <p><strong>Certificate Number:</strong> {response.certificateNumber}</p>
                                    </div>

                                    {/* Download Button */}
                                    {userName && <button
                                        onClick={generatePDF}
                                        className="mt-4 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-900 focus:ring-2 focus:ring-blue-300"
                                    >
                                        Download
                                        <img src={downloadIcon} alt="Download Icon" className="w-5 h-5" />
                                    </button>}

                                </div>
                            </div>


                        )
                    }

                    {showSignupMessage && (
                        <p className="mt-4 text-center text-blue-600">
                            Please <a href="/" className="underline font-medium">sign up</a> to continue tracking your carbon emissions.
                        </p>
                    )}
                </div>
            </div>

        </div>
    );
};