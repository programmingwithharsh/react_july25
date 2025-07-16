import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const message = 'Programming with Harsh';
const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"]; // array

// Without JSX
const element1 = React.createElement("h1", {}, "Programming with Harsh");
const element2 = React.createElement("ul",
    {},
    flowers.map((item, index) => React.createElement("li", { key: index }, item))
)

// With JSX, we can directly write HTML code inside Js
const element3 = <h1>Programming with Harsh 2 + 2 is {2 + 2}</h1>;
const element4 = <ul>
    {flowers.map((item, index) => (
        <li key={index}>{item}</li>
    ))}
</ul>

root.render(element4);
