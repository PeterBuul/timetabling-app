import React, { useState } from 'react';

// --- Initial Data Templates ---

// List of specialists as you provided
const SPECIALIST_NAMES = [
  'Science', 'Italian', 'P.E', 'Music', 'Library', 
  'SAKG', 'PMP', 'Cooking', 'Art', 'Sport'
];

// Generates the initial state for the specialist settings form
const getInitialSpecialists = () => 
  SPECIALIST_NAMES.map(name => ({
    id: name,
    name: name,
    duration: '40', // Default to 40 mins
    days: { Mon: false, Tue: false, Wed: false, Thu: false, Fri: false },
    yearLevels: '', // Simple text input for year levels
  }));

// Generates the initial state for year level settings
const getInitialYearLevels = () => [
  { id: 1, name: 'Prep A', blockedDays: '', requiredSlots: '' },
  { id: 2, name: 'Prep B', blockedDays: '', requiredSlots: '' },
  { id: 3, name: '1A', blockedDays: '', requiredSlots: '' },
  { id: 4, name: '1B', blockedDays: '', requiredSlots: '' },
  // Add more classes as needed
];

// --- Main App Component ---

function App() {
  const [specialists, setSpecialists] = useState(getInitialSpecialists());
  const [yearLevels, setYearLevels] = useState(getInitialYearLevels());
  const [timetable, setTimetable] = useState(null);

  // --- Form Handlers ---

  // Update specialist settings
  const handleSpecialistChange = (index, field, value) => {
    const updated = [...specialists];
    if (field === 'days') {
      updated[index].days[value] = !updated[index].days[value];
    } else {
      updated[index][field] = value;
    }
    setSpecialists(updated);
  };

  // Update year level settings
  const handleYearLevelChange = (index, field, value) => {
    const updated = [...yearLevels];
    updated[index][field] = value;
    setYearLevels(updated);
  };
  
  // --- Core Functions ---

  // Loads the template data
  const handleLoadTemplate = () => {
    setSpecialists(getInitialSpecialists());
    setYearLevels(getInitialYearLevels());
    setTimetable(null);
  };

  // MOCK generation function
  const handleGenerate = () => {
    // TODO: This is where the real constraint-solving algorithm would go.
    // For now, we just display a mock timetable to demonstrate PDF export.
    console.log("Inputs for generation:", { specialists, yearLevels });
    setTimetable([
      { day: 'Monday', '9:00': 'Prep A: P.E', '10:00': '1A: Music', '11:00': 'Lunch', '12:00': '2A: Art' },
      { day: 'Tuesday', '9:00': 'Prep B: PMP', '10:00': '1B: Italian', '11:00': 'Lunch', '12:00': '3A: Science' },
      { day: 'Wednesday', '9:00': '1A: Library', '10:00': '2B: Cooking', '11:00': 'Lunch', '12:00': 'Prep A: Music' },
      { day: 'Thursday', '9:00': '1B: SAKG', '10:00': 'Prep B: Sport', '11:00': 'Lunch', '12:00': '4A: P.E' },
      { day: 'Friday', '9:00': '2A: Italian', '10:00': 'Prep A: Library', '11:00': 'Lunch', '12:00': 'Assembly' },
    ]);
  };

  // PDF Export function
  const handleExportPDF = () => {
    // Use the CDN-loaded libraries (jsPDF and html2canvas)
    const { jsPDF } = window.jspdf;
    const input = document.getElementById('timetable-output');

    if (input) {
      window.html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          
          // Calculate scaling to fit
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 10; // Margin top

          pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
          pdf.save('timetable.pdf');
        });
    } else {
      alert("Please generate a timetable first.");
    }
  };

  // --- Render (JSX) ---

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Timetable Generator</h1>
          <p className="text-lg text-gray-600">Configure specialist and class constraints to generate a timetable.</p>
        </header>

        {/* --- Control Buttons --- */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={handleLoadTemplate}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Load Template
          </button>
          <button
            onClick={handleGenerate}
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-700 transition"
          >
            Generate Timetable
          </button>
          <button
            onClick={handleExportPDF}
            className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-700 transition disabled:opacity-50"
            disabled={!timetable}
          >
            Export to PDF
          </button>
        </div>

        {/* --- Configuration Forms --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Specialist Settings */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Specialist Settings</h2>
            <div className="space-y-6">
              {specialists.map((spec, index) => (
                <div key={spec.id} className="p-4 border rounded-md bg-gray-50">
                  <h3 className="font-bold text-lg text-blue-800">{spec.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {/* Duration */}
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Duration</label>
                      <select
                        value={spec.duration}
                        onChange={(e) => handleSpecialistChange(index, 'duration', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      >
                        <option value="40">40 mins</option>
                        <option value="60">1 hour</option>
                      </select>
                    </div>
                    {/* Year Levels */}
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Year Levels (e.g., P, 1, 2)</label>
                      <input
                        type="text"
                        value={spec.yearLevels}
                        onChange={(e) => handleSpecialistChange(index, 'yearLevels', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                  </div>
                  {/* Days */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-600">Days Subject Runs</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {Object.keys(spec.days).map(day => (
                        <label key={day} className="flex items-center space-x-1 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={spec.days[day]}
                            onChange={() => handleSpecialistChange(index, 'days', day)}
                            className="rounded text-blue-600"
                          />
                          <span className="text-sm">{day}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Year Level Settings */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Year Level Settings</h2>
            <div className="space-y-4">
              {yearLevels.map((yl, index) => (
                <div key={yl.id} className="p-4 border rounded-md bg-gray-50">
                  <h3 className="font-bold text-lg text-green-800">{yl.name}</h3>
                  <div className="mt-2 space-y-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Days to AVOID specialists (e.g., Mon, Fri)</label>
                      <input
                        type="text"
                        value={yl.blockedDays}
                        onChange={(e) => handleYearLevelChange(index, 'blockedDays', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">REQUIRED slots (e.g., PMP Tue 9:00)</label>
                      <input
                        type="text"
                        value={yl.requiredSlots}
                        onChange={(e) => handleYearLevelChange(index, 'requiredSlots', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Timetable Output --- */}
        {timetable && (
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Generated Timetable</h2>
            <div id="timetable-output" className="bg-white p-6 shadow-lg rounded-lg overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-3 text-left text-sm font-semibold text-gray-700">Day</th>
                    <th className="border border-gray-300 p-3 text-left text-sm font-semibold text-gray-700">9:00 AM</th>
                    <th className="border border-gray-300 p-3 text-left text-sm font-semibold text-gray-700">10:00 AM</th>
                    <th className="border border-gray-300 p-3 text-left text-sm font-semibold text-gray-700">11:00 AM</th>
                    <th className="border border-gray-300 p-3 text-left text-sm font-semibold text-gray-700">12:00 PM</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 p-3 font-medium">{row.day}</td>
                      <td className="border border-gray-300 p-3">{row['9:00']}</td>
                      <td className="border border-gray-300 p-3">{row['10:00']}</td>
                      <td className="border border-gray-300 p-3 font-semibold bg-gray-100">{row['11:00']}</td>
                      <td className="border border-gray-300 p-3">{row['12:00']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
