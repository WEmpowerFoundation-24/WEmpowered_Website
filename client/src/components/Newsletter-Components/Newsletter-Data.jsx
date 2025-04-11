import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Initialize pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Newsletter_Data = () => {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [useEmbed, setUseEmbed] = useState(false);
  const [containerWidth, setContainerWidth] = useState(800);

  // PDF path
  const newsletterPdf = '/we_connect.pdf';

  // Calculate proper width based on A4 aspect ratio
  const calculateWidth = () => {
    const maxWidth = window.innerWidth * 0.9;
    const a4Ratio = 210 / 297;
    const calculatedWidth = Math.min(maxWidth, 297 * a4Ratio * 3.78);
    setContainerWidth(calculatedWidth);
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF load error:', error);
    setUseEmbed(true);
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center gap-8">
        {useEmbed ? (
          <div className="w-full" style={{ height: `${containerWidth * 1.414}px` }}>
            <embed 
              src={newsletterPdf}
              type="application/pdf"
              width="100%"
              height="100%"
              className="border border-gray-200"
            />
          </div>
        ) : (
          <div 
            className="bg-white shadow-lg relative mx-auto" 
            style={{ 
              width: `${containerWidth}px`,
              height: `${containerWidth * 1.414}px`,
              overflow: 'hidden'
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
              loading={null}
            >
              <Page
                pageNumber={1}
                width={containerWidth}
                className="border border-gray-200"
                loading={
                  <div className="flex justify-center items-center h-full">
                    Loading page...
                  </div>
                }
              />
            </Document>
          </div>
        )}
      </div>
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