unique-react-speech-to-text

unique-react-speech-to-text is a React hook that provides an easy-to-use speech-to-text conversion feature. It utilizes the Web Speech API to capture and transcribe speech in real-time. This library simplifies the integration of voice recognition into React applications with minimal setup.

Features

Real-time speech-to-text conversion.

Continuous listening mode.

Configurable language support.

Error handling for unsupported browsers.

Simple API for seamless integration.

Lightweight and efficient.

Installation

To install the package, run the following command:

npm install unique-react-speech-to-text

Or using yarn:

yarn add unique-react-speech-to-text

Usage

unique-react-speech-to-text provides a simple hook to enable speech recognition in your React applications.

Basic Example:

import React from "react";
import { useSpeechToText } from "unique-react-speech-to-text";

const SpeechToTextDemo = () => {
  const { transcript, isListening, startListening, stopListening, error } = useSpeechToText({
    lang: "en-US",
    continuous: true,
    interimResults: true,
  });

  return (
    <div>
      <h1>Speech to Text Converter</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <textarea value={transcript} readOnly placeholder="Your speech will appear here..." />
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
    </div>
  );
};

export default SpeechToTextDemo;

API Reference

useSpeechToText(options)

This hook provides the following properties:

Parameters (options)

Option

Type

Default

Description

lang

String

"en-US"

Language code for recognition.

continuous

Boolean

true

Enables continuous listening mode.

interimResults

Boolean

true

Enables partial results before final transcription.

Returned Values

Property

Type

Description

transcript

String

The recognized speech converted into text.

isListening

Boolean

Indicates whether the recognition is active.

startListening

Function

Starts speech recognition.

stopListening

Function

Stops speech recognition.

error

String

Error message if speech recognition fails.

Browser Support

This library is based on the Web Speech API and is supported in:

Google Chrome

Microsoft Edge

Opera

Safari (Partial support)

Note: Firefox does not support the Web Speech API for speech recognition.

License

This project is licensed under the MIT License.

Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

Author

Developed by Clinto George.

