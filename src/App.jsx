import { useState } from "react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyyFigw6sPWxIfYaLRadXbVcFAPiSYPjveURrIFDXKr8hGMsORs2ppM3tbPTUBdVQKx_Q/execE";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    guests: "1",
    dietary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(formData),
    });

    alert("RSVP sent!");
  };

  return (
    <div className="p-6">
      <h1>Steffen’s 60th Birthday Party</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <br />
        <label>
          <input type="radio" name="attendance" value="yes" onChange={handleChange} /> Yes
        </label>
        <label>
          <input type="radio" name="attendance" value="no" onChange={handleChange} /> No
        </label>
        <br />
        <input name="guests" type="number" onChange={handleChange} />
        <br />
        <textarea name="dietary" onChange={handleChange}></textarea>
        <br />
        <button type="submit">Send RSVP</button>
      </form>
    </div>
  );
}