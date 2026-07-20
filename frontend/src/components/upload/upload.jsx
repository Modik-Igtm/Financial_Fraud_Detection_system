import { useState } from "react";
import { UploadCloud, CheckCircle } from "lucide-react";
import api from "../../services/api";

export default function UploadBox({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a CSV file.");
      return;
    }

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setMessage("Only CSV files are supported.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      setMessage("");

      const response = await api.post(
        "/transactions/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(
        `${response.data.length} transactions analyzed successfully.`
      );

      setFile(null);

      if (onUploadSuccess) {
        onUploadSuccess(response.data);
      }
    } catch (error) {
      console.error("Upload failed:", error);

      setMessage(
        error.response?.data?.detail ||
          "CSV upload failed. Check the file and backend."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-[#131D32]/80 border border-cyan-500/10 rounded-3xl p-6">

      <div className="flex items-center gap-3 mb-5">
        <UploadCloud className="text-cyan-400" />

        <div>
          <h2 className="text-xl font-semibold">
            Analyze Transactions
          </h2>

          <p className="text-sm text-gray-400">
            Upload transaction data for AI fraud analysis
          </p>
        </div>
      </div>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          setFile(e.target.files?.[0] || null);
          setMessage("");
        }}
        className="block w-full text-sm text-gray-400 mb-4"
      />

      {file && (
        <div className="bg-[#1F2937] rounded-xl p-3 mb-4 text-sm">
          Selected: {file.name}
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-semibold py-3 rounded-xl transition"
      >
        {uploading
          ? "Analyzing Transactions..."
          : "Upload & Analyze"}
      </button>

      {message && (
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-300">
          <CheckCircle size={17} className="text-cyan-400" />
          {message}
        </div>
      )}

    </div>
  );
}