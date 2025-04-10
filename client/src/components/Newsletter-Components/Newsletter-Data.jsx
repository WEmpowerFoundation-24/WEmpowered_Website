import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Initialize pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Newsletter_Data = () => {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // PDF path - make sure it's in public folder
  const newsletterPdf ='/we_connect.pdf';

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(false);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF load error:', error);
    setError(true);
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">

      {error ? (
        <div className="text-center p-8 bg-red-50 rounded-lg">
          <p className="text-red-600 font-medium">Failed to load PDF</p>
          <p className="mt-4">
            You can <a href={newsletterPdf} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">view the PDF directly</a>
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-8">
          <div 
            className="bg-white shadow-lg relative" 
            style={{ 
              width: '210mm',
              minHeight: '297mm'
            }}
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p>Loading newsletter...</p>
              </div>
            )}

            <Document
              file={newsletterPdf}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={null} // We handle loading state ourselves
            >
              {Array.from(new Array(numPages), (_, index) => (
                <div 
                  key={`page_${index + 1}`}
                  className="mb-8 last:mb-0"
                >
                  <Page
                    pageNumber={index + 1}
                    width={210 * 3.78}
                    className="border border-gray-200"
                    loading={
                      <div className="flex justify-center items-center h-[297mm]">
                        Loading page {index + 1}...
                      </div>
                    }
                  />
                </div>
              ))}
            </Document>
          </div>
        </div>
      )}

      {/* Print Button - shows only when PDF is loaded */}
      {numPages && !error && (
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              const printWindow = window.open(newsletterPdf);
              printWindow?.addEventListener('load', () => {
                setTimeout(() => printWindow.print(), 500);
              });
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded transition"
          >
            Print Newsletter
          </button>
        </div>
      )}
    </div>
  );
};

export default Newsletter_Data;





































// import React from 'react';
// import NewsLetterPage1 from '../../assets/Newsletter_Assets/p1.png'
// import NewsLetterPage2 from '../../assets/Newsletter_Assets/p2.png'
// import NewsLetterPage3 from '../../assets/Newsletter_Assets/p3.png'
// import NewsLetterPage4 from '../../assets/Newsletter_Assets/p4.png'
// import NewsLetterPage5 from '../../assets/Newsletter_Assets/p5.png'
// import NewsLetterPage6 from '../../assets/Newsletter_Assets/p6.png'
// import NewsLetterPage7 from '../../assets/Newsletter_Assets/p7.png'
// import NewsLetterPage8 from '../../assets/Newsletter_Assets/p8.png'
// import NewsLetterPage9 from '../../assets/Newsletter_Assets/p9.png'


// const Newsletter_Data = () => {
//   const newsletterPages = [
//     NewsLetterPage1,
//     NewsLetterPage2,
//     NewsLetterPage3,
//     NewsLetterPage4,
//     NewsLetterPage5,
//     NewsLetterPage6,
//     NewsLetterPage7,
//     NewsLetterPage8,
//     NewsLetterPage9,
//     // Add more pages as needed
//   ];

//   return (
//     <div className="container mx-auto p-4">
      
//       <div className="flex flex-col items-center gap-8">
//         {newsletterPages.map((page, index) => (
//           <div 
//             key={index}
//             className="bg-white shadow-lg"
//             style={{
//               width: '210mm',
//               height: '297mm',
//               overflow: 'hidden'
//             }}
//           >
//             <img 
//               src={page} 
//               alt={`Newsletter page ${index + 1}`}
//               className="w-full h-full object-contain border border-gray-200"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Print Button */}
//       <div className="mt-8 text-center">
//         <button
//           onClick={() => window.print()}
//           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded transition"
//         >
//           Print Newsletter
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Newsletter_Data;