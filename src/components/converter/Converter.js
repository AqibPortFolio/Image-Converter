import React, { useState } from "react";
import axios from "axios";

const Converter = () => {
  const [status, setStatus] = useState('No file uploaded');
  const [file, setFile] = useState(null);
  const [mp3Url, setMp3Url] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Check if the selected file is an image (SVG, PNG, JPG, or GIF)
      if (!['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'].includes(selectedFile.type)) {
        setStatus('Error: Please upload a valid image file (SVG, PNG, JPG, or GIF)');
        setFile(null);
        return;
      }

      // Reset MP3 URL when new file is selected
      setMp3Url('');
      
      setFile(selectedFile);
      setStatus('Upload complete');
    } else {
      setStatus('No file uploaded');
    }
  };

  const handleConvertToMp3 = async () => {
    if (!file) {
      setStatus('No file to convert');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setIsLoading(true);
      setStatus('Converting...');
      const response = await axios.post('https://plankton-app-xgoyn.ondigitalocean.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob' // Ensure response is treated as binary data (for files)
      });

      // Assuming the response is the MP3 file itself
      if (response.data) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        setMp3Url(url);
        setStatus('Conversion complete');
      } else {
        setStatus('Conversion failed: No MP3 file received');
      }
    } catch (error) {
      console.error('Error converting file:', error);
      setStatus('Conversion failed: ' + error.message); // Update status with error message
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadMp3 = () => {
    if (mp3Url) {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = mp3Url;
      link.setAttribute('download', 'converted.mp3');
      document.body.appendChild(link);
      link.click();
      // Clean up: Remove the temporary anchor element
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-slate-50 border-b-2 flex items-center justify-center p-4">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Upload Image</h2>
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
        </label>

        <p className="text-sm text-gray-600 mt-2">{status}</p>

        {file && (
          <>
            <div className="mt-4">
              <img src={URL.createObjectURL(file)} alt="Uploaded" className="w-full h-auto rounded-md" />
            </div>
            <button
              onClick={handleConvertToMp3}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              disabled={isLoading} // Disable button when loading
            >
              Convert to MP3
            </button>
          </>
        )}

        {isLoading && (
          <div aria-label="Loading..." role="status" className="flex items-center space-x-2 mt-4">
            <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
              <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
            </svg>
            <span className="text-4xl font-medium text-gray-500">Loading...</span>
          </div>
        )}

        {mp3Url && (
          <div className="mt-4">
            <audio controls src={mp3Url} className="w-full">
              Your browser does not support the audio element.
            </audio>
            <button
              onClick={handleDownloadMp3}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 block text-center"
            >
              Download MP3
            </button>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default Converter;