import React, { useState } from 'react';

// --- Configuration Tab Component (Unchanged) ---
const ConfigView = () => {
  const [specialists] = useState([
    'Science', 'Italian', 'P.E', 'Music', 'Library', 'SAKG', 'PMP', 'Cooking', 'Art', 'Sport'
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Specialist Settings</h2>
        <div className="space-y-6">
          {specialists.map((name) => (
            <div key={name} className="p-4 border rounded-md bg-gray-50">
              <h3 className="font-bold text-lg text-blue-800">{name}</h3>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Duration</label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option value="40">40 mins</option>
                    <option value="60">1 hour</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Year Levels (e.g., P, 1, 2)</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Year Level Settings</h2>
        <div className="space-y-4">
          {['Prep A', 'Prep B', '1A', '1B', '2A'].map((name) => (
            <div key={name} className="p-4 border rounded-md bg-gray-50">
              <h3 className="font-bold text-lg text-green-800">{name}</h3>
              <div className="mt-2 space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Days to AVOID specialists</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">REQUIRED slots (e.g., PMP Tue 9:00)</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Timetable Output Component (Accurate Mockup from PDF) ---
const TimetableView = () => (
  <div id="timetable-output" className="bg-white p-4 shadow-lg rounded-lg overflow-x-auto">
    <h2 className="text-xl font-bold text-center mb-1">SPECIALIST TIMETABLE - Term 4 2025 VERSION 3 [cite: 1, 2, 4]</h2>
    <h3 className="text-sm text-center text-gray-600 mb-4">Modified 31/10/25 [cite: 3]</h3>
    <div className="tt-grid border-t border-l">
      {/* --- Headers --- */}
      <div className="tt-header"></div>
      <div className="tt-header">9:00</div>
      <div className="tt-header">9:40</div>
      <div className="tt-header">10:20</div>
      <div className="tt-header col-span-2">11:30</div>
      <div className="tt-header">12:10</div>
      <div className="tt-header">12:50</div>
      <div className="tt-header">2:30</div>
      <div className="tt-header">3:10 3:45</div>
      
      {/* --- MONDAY [cite: 4] --- */}
      <div className="tt-day row-span-9">MONDAY</div>
      <div className="tt-cell"><div className="tt-cell-content">OA</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OB</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OC</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">OD</div></div>
      <div className="tt-cell"><div className="tt-cell-content">2A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">2C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">2B</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      
      <div className="tt-cell"><div className="tt-cell-content">56D</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56F</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56C</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">Kate OA TR</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"><div className="tt-cell-content">2A</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"></div>

      <div className="tt-cell"><div className="tt-cell-content">ICT</div></div>
      <div className="tt-cell"><div className="tt-cell-content">ICT</div></div>
      <div className="tt-cell"><div className="tt-cell-content">ICT</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">1A PE</div></div>
      <div className="tt-cell"><div className="tt-cell-content">1C PE</div></div>
      <div className="tt-cell"><div className="tt-cell-content">1B PE</div></div>
      <div className="tt-cell"><div className="tt-cell-content">ICT</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>

      <div className="tt-cell"><div className="tt-cell-content">56C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56G</div></div>
      <div className="tt-cell"><div className="tt-cell-content">560</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">3C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">3B</div></div>
      <div className="tt-cell"><div className="tt-cell-content">3A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">568</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>

      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56E</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">38</div></div>
      <div className="tt-cell"><div className="tt-cell-content">3A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">3C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">4A</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      
      <div className="tt-cell"><div className="tt-cell-content">56E</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56D</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56F</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">2A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">2C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OC</div></div>
      <div className="tt-cell"><div className="tt-cell-content">10</div></div>
      <div className="tt-cell"></div>
      
      <div className="tt-cell col-span-2"><div className="tt-cell-content">48/56B</div></div>
      <div className="tt-cell-prep col-span-2"><div className="tt-cell-content">Preparation</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">4A/56G</div></div>
      <div className="tt-cell-prep"><div className="tt-cell-content">Preparation</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56E</div></div>
      <div className="tt-cell"></div>

      <div className="tt-cell col-span-7"></div>
      <div className="tt-cell col-span-2 bg-yellow-100"><div className="tt-cell-content">FOUNDATION PMP</div></div>
      
      <div className="tt-cell col-span-9 bg-green-100"><div className="tt-cell-content">YEAR 1/2 COOKING</div></div>
      
      {/* --- TUESDAY [cite: 5] --- */}
      <div className="tt-day row-span-6">TUESDAY</div>
      <div className="tt-cell"><div className="tt-cell-content">56A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">568</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56G</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">56C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56F</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56D</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56E</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      
      <div className="tt-cell"><div className="tt-cell-content">56B</div></div>
      <div className="tt-cell"><div className="tt-cell-content">3B</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56E</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">4C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OB</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OA</div></div>
      <div className="tt-cell"><div className="tt-cell-content">10</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>

      <div className="tt-cell"><div className="tt-cell-content">56E</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56F</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">4A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">48</div></div>
      <div className="tt-cell"><div className="tt-cell-content">4C</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"></div>
      
      <div className="tt-cell"><div className="tt-cell-content">56C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56G</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56A</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">OD</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OA</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OB</div></div>
      <div className="tt-cell"><div className="tt-cell-content">4B</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      
      <div className="tt-cell col-span-2"><div className="tt-cell-content">3A/56F</div></div>
      <div className="tt-cell-prep col-span-2"><div className="tt-cell-content">Preparation</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">3B/56D</div></div>
      <div className="tt-cell-prep"><div className="tt-cell-content">Preparation</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">3C/560</div></div>
      
      <div className="tt-cell col-span-6"></div>
      <div className="tt-cell col-span-3 bg-yellow-100"><div className="tt-cell-content">FOUNDATION PMP</div></div>
      
      {/* --- WEDNESDAY [cite: 6] --- */}
      <div className="tt-day row-span-6">WEDNESDAY</div>
      <div className="tt-cell col-span-3"><div className="tt-cell-content">YEAR 5/6</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">OA</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OB</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OC</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"></div>
      
      <div className="tt-cell"><div className="tt-cell-content">1A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">18</div></div>
      <div className="tt-cell"><div className="tt-cell-content">1C</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">TR 56C Jamey (Grad)</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">TR 2C Bella (Grad)</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">TR or APT</div></div>

      <div className="tt-cell"><div className="tt-cell-content">30</div></div>
      <div className="tt-cell"><div className="tt-cell-content">3A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">20</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">Mitch 1A TR</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">Jake 3A TR</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">TR 56G Jason (Grad)</div></div>
      
      <div className="tt-cell"><div className="tt-cell-content">56F</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56G</div></div>
      <div className="tt-cell"><div className="tt-cell-content">560</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">OC</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OD</div></div>
      <div className="tt-cell"><div className="tt-cell-content">1C</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"></div>
      
      <div className="tt-cell col-span-2"><div className="tt-cell-content">Maintenance/Prep</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">4C/56A</div></div>
      <div className="tt-cell-prep col-span-2"><div className="tt-cell-content">ES</div></div>
      <div className="tt-cell-prep"><div className="tt-cell-content">ES</div></div>
      <div className="tt-cell col-span-2"></div>

      <div className="tt-cell col-span-4"></div>
      <div className="tt-cell col-span-2 bg-yellow-100"><div className="tt-cell-content">YEAR 1 PMP</div></div>
      <div className="tt-cell col-span-3 bg-purple-100"><div className="tt-cell-content">ASSEMBLY</div></div>

      {/* --- THURSDAY [cite: 7] --- */}
      <div className="tt-day row-span-6">THURSDAY</div>
      <div className="tt-cell"><div className="tt-cell-content">4B</div></div>
      <div className="tt-cell"><div className="tt-cell-content">4C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">4A</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">2B</div></div>
      <div className="tt-cell"><div className="tt-cell-content">2A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">20</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"></div>

      <div className="tt-cell"><div className="tt-cell-content">56A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">56G</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">OD</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OC</div></div>
      <div className="tt-cell"><div className="tt-cell-content">4A</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"></div>

      <div className="tt-cell"><div className="tt-cell-content">4C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">560</div></div>
      <div className="tt-cell"><div className="tt-cell-content">568</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">1A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OA</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OB</div></div>
      <div className="tt-cell col-span-2 bg-orange-100"><div className="tt-cell-content">Gr. 3 Sport</div></div>
      
      <div className="tt-cell"><div className="tt-cell-content">4A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">3A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">4C</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">1B</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">1A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">568</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>

      <div className="tt-cell col-span-2"><div className="tt-cell-content">TR Laura 2A</div></div>
      <div className="tt-cell col-span-3"><div className="tt-cell-content">TR Peter 1C</div></div>
      <div className="tt-cell col-span-4"><div className="tt-cell-content">TR 1C/2A alternating</div></div>

      <div className="tt-cell col-span-7"></div>
      <div className="tt-cell col-span-2 bg-orange-100"><div className="tt-cell-content">Gr. 3 Sport</div></div>

      {/* --- FRIDAY [cite: 8] --- */}
      <div className="tt-day row-span-7">FRIDAY</div>
      <div className="tt-cell"><div className="tt-cell-content">3C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">38</div></div>
      <div className="tt-cell"><div className="tt-cell-content">3A</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">OD</div></div>
      <div className="tt-cell"><div className="tt-cell-content">18</div></div>
      <div className="tt-cell"><div className="tt-cell-content">1A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">1C</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      
      <div className="tt-cell col-span-2"><div className="tt-cell-content">Graduation</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">1A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">4B</div></div>
      <div className="tt-cell"><div className="tt-cell-content">18</div></div>
      <div className="tt-cell"><div className="tt-cell-content">2B</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>

      <div className="tt-cell"><div className="tt-cell-content">20</div></div>
      <div className="tt-cell"><div className="tt-cell-content">28</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OD</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">OA</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OC</div></div>
      <div className="tt-cell"><div className="tt-cell-content">OB</div></div>
      <div className="tt-cell"><div className="tt-cell-content">2A</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      
      <div className="tt-cell"><div className="tt-cell-content">18</div></div>
      <div className="tt-cell"><div className="tt-cell-content">CAROLS PREP</div></div>
      <div className="tt-cell"><div className="tt-cell-content">4B</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">2A</div></div>
      <div className="tt-cell"><div className="tt-cell-content">28</div></div>
      <div className="tt-cell"><div className="tt-cell-content">20</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"></div>
      
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"><div className="tt-cell-content">3C</div></div>
      <div className="tt-cell"><div className="tt-cell-content">3B</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">2B</div></div>
      <div className="tt-cell col-span-2"><div className="tt-cell-content">Cataloguing</div></div>
      <div className="tt-cell-apt"><div className="tt-cell-content">APT</div></div>
      <div className="tt-cell"></div>

      <div className="tt-cell col-span-9 bg-orange-100"><div className="tt-cell-content">45 SPORT</div></div>
      <div className="tt-cell col-span-9 bg-green-100"><div className="tt-cell-content">FOUNDATION COOKING</div></div>
    </div>
  </div>
);


// --- Main App Component (Unchanged) ---
function App() {
  const [activeTab, setActiveTab] = useState('config'); // 'config' or 'timetable'

  const handleExportPDF = () => {
    const { jsPDF } = window.jspdf;
    const input = document.getElementById('timetable-output');

    if (input) {
      window.html2canvas(input, { scale: 2 })
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('l', 'mm', 'a4'); 
          
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          
          const ratio = Math.min((pdfWidth - 20) / imgWidth, (pdfHeight - 20) / imgHeight);
          const imgX = 10;
          const imgY = 10;
          const w = imgWidth * ratio;
          const h = imgHeight * ratio;

          pdf.addImage(imgData, 'PNG', imgX, imgY, w, h);
          pdf.save('timetable.pdf');
        });
    } else {
      alert("Please generate a timetable first.");
    }
  };
  
  const TabButton = ({ a, b, children }) => (
    <button
      onClick={() => setActiveTab(a)}
      className={`py-2 px-4 font-semibold rounded-t-lg ${
        activeTab === a ? 'bg-white text-blue-700' : 'bg-gray-100 text-gray-600 border-b-2 border-transparent'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-full mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Timetable Generator</h1>
          <p className="text-lg text-gray-600">Configure constraints and generate the specialist timetable.</p>
        </header>

        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('timetable')}
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-700 transition"
          >
            Generate Timetable
          </button>
          <button
            onClick={handleExportPDF}
            className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-700 transition disabled:opacity-50"
            disabled={activeTab !== 'timetable'}
          >
            Export to PDF
          </button>
        </div>

        <div className="flex border-b border-gray-300">
          <TabButton a="config">1. Configuration</TabButton>
          <TabButton a="timetable">2. Timetable Output</TabButton>
        </div>

        <div className="mt-[-1px] p-6 bg-white rounded-b-lg rounded-r-lg border border-gray-300">
          {activeTab === 'config' ? <ConfigView /> : <TimetableView />}
        </div>
        
      </div>
    </div>
  );
}

export default App;
