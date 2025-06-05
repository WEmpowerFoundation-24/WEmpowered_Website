import { useEffect, useState } from 'react';

const Newsletter_Data = () => {
  const [containerWidth, setContainerWidth] = useState(800);

  const calculateWidth = () => {
    const maxWidth = window.innerWidth * 0.95;
    const a4Ratio = 210 / 297;
    const calculatedWidth = Math.min(maxWidth, 297 * a4Ratio * 3.78);
    setContainerWidth(calculatedWidth);
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center gap-8">
        <div 
          className="w-full border border-gray-200 shadow-lg" 
          style={{ 
            maxWidth: `${containerWidth}px`, 
            height: `${containerWidth * 1.414}px` 
          }}
        >
          <embed 
            src="/we_connect.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            className="rounded"
          />
        </div>

        {/* Optional Download or Print Buttons */}
        <div className="mt-4 text-center space-x-4">
          <a
            href="/we_connect.pdf"
            download
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Download PDF
          </a>
          <button
            onClick={() => window.print()}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter_Data;
