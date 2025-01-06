import React, { useState } from "react";
import './Book.css'; // Importing the CSS file

function SlamBook() {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    address: "",
    phone: "",
    memories: "",
    gender: "",
    favoriteActors: [],
    school: "",
  });

  const [submittedEntries, setSubmittedEntries] = useState([]); // Store the submitted entries

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        favoriteActors: checked
          ? [...prev.favoriteActors, value]
          : prev.favoriteActors.filter((actor) => actor !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Slam Book Data: ", formData);
    alert("Form Submitted! Check console for details.");

    // Add the current form data to the submitted entries list
    setSubmittedEntries((prevEntries) => [...prevEntries, formData]);

    // Optionally, reset the form after submission
    setFormData({
      name: "",
      nickname: "",
      address: "",
      phone: "",
      memories: "",
      gender: "",
      favoriteActors: [],
      school: "",
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Slam Book</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <br />

        {/* Nickname */}
        <label>Nickname:</label>
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="Enter your nickname"
        />
        <br />

        {/* Address */}
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />
        <br />

        {/* Phone */}
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        <br />

        {/* Memories */}
        <label>Memories:</label>
        <input
          type="text"
          name="memories"
          value={formData.memories}
          onChange={handleChange}
          placeholder="Write your memories"
        />
        <br />

        {/* Gender */}
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </div>
        <br />

        {/* Favorite Actors */}
        <label>Favorite Actors:</label>
        <div>
          <input
            type="checkbox"
            name="favoriteActors"
            value="Actor A"
            checked={formData.favoriteActors.includes("Actor A")}
            onChange={handleChange}
          />
          Actor A
          <input
            type="checkbox"
            name="favoriteActors"
            value="Actor B"
            checked={formData.favoriteActors.includes("Actor B")}
            onChange={handleChange}
          />
          Actor B
          <input
            type="checkbox"
            name="favoriteActors"
            value="Actor C"
            checked={formData.favoriteActors.includes("Actor C")}
            onChange={handleChange}
          />
          Actor C
          <input
            type="checkbox"
            name="favoriteActors"
            value="Actor D"
            checked={formData.favoriteActors.includes("Actor D")}
            onChange={handleChange}
          />
          Actor D
          <input
            type="checkbox"
            name="favoriteActors"
            value="Actor E"
            checked={formData.favoriteActors.includes("Actor E")}
            onChange={handleChange}
          />
          Actor E
        </div>
        <br />

        {/* School */}
        <label>School:</label>
        <select
          name="school"
          value={formData.school}
          onChange={handleChange}
        >
          <option value="">--Select School--</option>
          <option value="School A">School A</option>
          <option value="School B">School B</option>
          <option value="School C">School C</option>
        </select>
        <br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {/* Display Submitted Entries */}
      <div style={{ marginTop: "20px" }}>
        <h2>Previous Entries:</h2>
        {submittedEntries.length === 0 ? (
          <p>No entries submitted yet.</p>
        ) : (
          submittedEntries.map((entry, index) => (
            <div key={index} style={{ marginBottom: "15px", border: "1px solid #ccc", padding: "10px" }}>
              <h3>Entry {index + 1}</h3>
              <p><strong>Name:</strong> {entry.name}</p>
              <p><strong>Nickname:</strong> {entry.nickname}</p>
              <p><strong>Address:</strong> {entry.address}</p>
              <p><strong>Phone:</strong> {entry.phone}</p>
              <p><strong>Memories:</strong> {entry.memories}</p>
              <p><strong>Gender:</strong> {entry.gender}</p>
              <p><strong>Favorite Actors:</strong> {entry.favoriteActors.join(", ")}</p>
              <p><strong>School:</strong> {entry.school}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SlamBook;
