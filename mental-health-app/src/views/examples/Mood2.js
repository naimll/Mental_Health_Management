import React, { useState } from "react";
import axios from "axios";

const MoodForm = () => {
  // Define state to manage form data
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [mood, setMood] = useState("");
  const [notes, setNotes] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send
    const moodData = {
      id,
      userId,
      mood,
      notes,
      createdAt: new Date().toISOString(),
    };

    try {
      // Make a POST request to the API (use your actual endpoint URL here)
      const response = await axios.post("http://localhost:5261/api/MoodEntries", moodData);
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <h1>Submit Your Mood</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="mood">Mood:</label>
          <select
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="">Select your mood</option>
            <option value="Happy">Happy</option>
            <option value="Neutral">Neutral</option>
            <option value="Sad">Sad</option>
            <option value="Anxious">Anxious</option>
            <option value="Stressed">Stressed</option>
          </select>
        </div>
         */}



        <div className="moodbutton-container">
          <label htmlFor="mood">Mood:</label>
          <div>
            {/* Mood buttons */}
            <button className="moodbutton"
              type="button"
              onClick={() => setMood("Happy")}
              style={{
                backgroundColor: mood === "Happy" ? "green" : "lightgray",
              }}
            >
              I/e lumtur
            </button>
            <button
              type="button"
              onClick={() => setMood("Neutral")}
              style={{
                backgroundColor: mood === "Neutral" ? "lightgreen" : "lightgray",
              }}
            >
              Neutral
            </button>
            <button
              type="button"
              onClick={() => setMood("Sad")}
              style={{
                backgroundColor: mood === "Sad" ? "lightgreen" : "lightgray",
              }}
            >
              Sad
            </button>
            <button
              type="button"
              onClick={() => setMood("Anxious")}
              style={{
                backgroundColor: mood === "Anxious" ? "lightgreen" : "lightgray",
              }}
            >
              Anxious
            </button>
            <button
              type="button"
              onClick={() => setMood("Stressed")}
              style={{
                backgroundColor: mood === "Stressed" ? "lightgreen" : "lightgray",
              }}
            >
              Stressed
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MoodForm;
