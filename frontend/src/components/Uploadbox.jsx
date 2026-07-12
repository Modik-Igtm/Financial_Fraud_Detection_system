import { useState } from "react";
import api from "../services/api";

function UploadBox() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const uploadFile = async () => {

        if (!file) {
            alert("Please select a CSV file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {

            const response = await api.post(
                "/transactions/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            console.log(response.data);

            setMessage("✅ File uploaded successfully!");

        } catch (error) {

            console.error(error);

            setMessage("❌ Upload failed.");

        }

    };

    return (

        <div>

            <input
                type="file"
                accept=".csv"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <br /><br />

            <button onClick={uploadFile}>
                Upload CSV
            </button>

            <p>{message}</p>

        </div>

    );

}

export default UploadBox;