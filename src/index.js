import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main'; // Import Main Component

const root = ReactDOM.createRoot(document.getElementById('root'));

const username = "Rohan"; // string
const hobbies = ["Mobile Gaming", "Cricket", "Walking", "Running"]; // Array
const birth = { // object
    year: 2000,
    place: "Mumbai"
}

root.render(<Main usernameProps={username} hobbiesProps={hobbies} birthProps={birth} />); // calling Main Component
