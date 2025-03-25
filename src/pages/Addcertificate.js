import React, { useState } from "react";

function AddCertificate() {
  const [file, setFile] = useState(null);
  const [certificateDetails, setCertificateDetails] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file || !certificateDetails) {
      alert("Please upload a certificate and enter details.");
      return;
    }
    alert(`Uploaded: ${file.name} with details: ${certificateDetails}`);
  };

  return (
    <div className="page-container">
      <h2>Upload Certificate</h2>
      <div className="upload-form">
        <input type="file" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Enter certificate details"
          value={certificateDetails}
          onChange={(e) => setCertificateDetails(e.target.value)}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}

export default AddCertificate;
