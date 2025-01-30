import React, { useState } from "react";
import pure from "../resource/co2.png";
import { Chart } from "react-google-charts";

export const ViewChart = () => {
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [formData, setFormData] = useState({
        fuelType: "",
        startDate: "",
        endDate: "",
    });
    const [selectedRange, setSelectedRange] = useState("");
    const [chartData, setChartData] = useState([["Date", "Carbon Footprint"]]);
    const [pieChartData, setPieChartData] = useState([["Date", "Carbon Footprint"]]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isChartVisible, setIsChartVisible] = useState(false);

    const handleVehicleInputChange = (e) => setVehicleNumber(e.target.value);

    const fetchFuelAndDates = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4500/api/vehicle/fueltype/${vehicleNumber}`);
            const data = await response.json();
            if (data?.fuelType) {
                setFormData({ fuelType: data.fuelType, startDate: "", endDate: "" });
                setIsFormVisible(true);
            } else {
                alert("Vehicle details not found.");
            }
        } catch (error) {
            alert("Failed to fetch vehicle details.");
        }
    };

    const handleDateSelection = (e) => {
        const range = e.target.value;
        setSelectedRange(range);
        const today = new Date();
        let startDate = "",
            endDate = today.toISOString().split("T")[0];

        switch (range) {
            case "daily":
                startDate = endDate;
                break;
            case "last7days":
                startDate = new Date(today.setDate(today.getDate() - 7)).toISOString().split("T")[0];
                break;
            case "last15days":
                startDate = new Date(today.setDate(today.getDate() - 15)).toISOString().split("T")[0];
                break;
            case "monthly":
                startDate = new Date(today.setMonth(today.getMonth() - 1)).toISOString().split("T")[0];
                break;
            case "manual":
                startDate = "";
                endDate = "";
                break;
            default:
                return;
        }
        setFormData({ ...formData, startDate, endDate });
    };

    const handleDateChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.startDate || !formData.endDate) {
            alert("Please select both start and end dates.");
            return;
        }
        try {
            const response = await fetch(
                `http://localhost:4500/api/vehicle/carbon-footprint?vehicleNumber=${vehicleNumber}&startDate=${formData.startDate}&endDate=${formData.endDate}`
            );
            const data = await response.json();
            if (data?.carbonFootprintData?.length > 0) {
                const formattedData = [
                    ["Date", "Carbon Footprint"],
                    ...data.carbonFootprintData.map((item) => [item.date, parseFloat(item.carbonFootprint)]),
                ];
                setChartData(formattedData);
                setPieChartData(formattedData);
                setIsChartVisible(true);
            } else {
                alert("No data found.");
            }
        } catch (error) {
            alert("Failed to fetch data.");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-cover bg-center p-4" style={{ backgroundImage: `url(${pure})` }}>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md m-8">
                {!isFormVisible ? (
                    <form onSubmit={fetchFuelAndDates} className="space-y-4">
                        <h1 className="text-3xl font-bold text-center">Enter Vehicle Number</h1>
                        <input
                            type="text"
                            value={vehicleNumber}
                            onChange={handleVehicleInputChange}
                            className="w-full px-4 py-2 border rounded-lg"
                            required
                            placeholder="Enter vehicle number"
                        />
                        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Fetch Details
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-xl font-semibold text-center">Carbon Footprint Form</h2>
                        <input type="text" value={formData.fuelType} readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100" />

                        <h3 className="font-medium text-center">Select Date Range</h3>
                        <div className="flex flex-col space-y-2">
                            {["daily", "last7days", "last15days", "monthly", "manual"].map((range) => (
                                <label key={range} className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="dateRange"
                                        value={range}
                                        checked={selectedRange === range}
                                        onChange={handleDateSelection}
                                        className="form-radio"
                                    />
                                    <span className="capitalize">{range.replace(/([a-z])([A-Z])/g, "$1 $2")}</span>
                                </label>
                            ))}
                        </div>
                        {selectedRange === "manual" && (
                            <div className="space-y-2">
                                <label className="block">Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleDateChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                                <label className="block">End Date</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleDateChange}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                        )}

                        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Submit
                        </button>
                    </form>
                )}
            </div>

            {isChartVisible && (
                <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mt-8">
                    <h2 className="text-xl font-semibold text-center mb-4">Carbon Footprint Data</h2>
                    <Chart chartType="ColumnChart" data={chartData} width="100%" height="400px" />
                    <Chart chartType="LineChart" data={chartData} width="100%" height="400px" />
                    <Chart chartType="PieChart" data={pieChartData} width="100%" height="400px" />
                </div>
            )}
        </div>
    );
};