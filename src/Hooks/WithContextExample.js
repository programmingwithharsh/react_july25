import { useState, createContext, useContext } from 'react';
/*

With Context

C1 -> C2 -> C3 -> C4 -> C5
"Ajay" -> C2 -> C3 -> C4 -> "Ajay"

Created separate component file 
Create one file and create 5 components inside it
*/

const UserContext = createContext(); // create context

// 1st component username is "Ajay"
const WithContextExample = () => {
    const [username, setUsername] = useState("Ajay"); // username is Ajay
    return <div>
        <h1>With Context example</h1>
        <div>In Component 1, Username is {username}</div>
        <UserContext.Provider value={username}>
            <C2 />
        </UserContext.Provider>
    </div>
}
// 2nd component
const C2 = () => {
    return (<C3 />);
}
// 3rd component
const C3 = () => {
    return (<C4 />);
}
// 4th component
const C4 = () => {
    return (<C5 />);
}
// 5th component
const C5 = () => {
    const username = useContext(UserContext); // using value from context
    return (<div>
        <div>In Component 5, Username is {username}</div>
    </div>);
}

export default WithContextExample;

