import React, { useState, useRef } from "react";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");
  const recognitionRef = useRef(null);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      setError("Speech recognition is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = "en-US"; // Language configuration
    recognition.interimResults = true; // Receive partial results
    recognition.continuous = true; // Keep listening continuously

    recognition.onstart = () => {
      setIsListening(true);
      setError("");
    };

    recognition.onresult = (event) => {
      const speechToText = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(" ");
      setTranscript(speechToText);
    };

    recognition.onerror = (event) => {
      setError(`Error occurred: ${event.error}`);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="text-center p-5">
      <h1 className="font-semibold">Speech to Text Converter</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
     
      <textarea
        className="border border-black"
        rows="10"
        cols="50"
        value={transcript}
        readOnly
        placeholder="Your speech will appear here..."
        style={{ marginTop: "20px", width: "80%", }}
      />
            <div className="mt-5 flex justify-center">
        <button className="px-5 bg-red-500 text-white" onClick={isListening ? stopListening : startListening}>
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>
      </div>
    </div>
  );
};

export default SpeechToText; 
    