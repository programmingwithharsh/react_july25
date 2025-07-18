/*

Assignment 1 - Create array and object in Javascript
----------------------------------------------------
Create array and object in Javascript and print the result in console

1. Create state variable which contains multiple cities (5) for example

state city1, city2, city3, city4, city5

2. Create country object which contains multiple state (5) along with cities (5), for example

country object
    state city1, city2, city3, city4, city5
    state city1, city2, city3, city4, city5
    state city1, city2, city3, city4, city5
    state city1, city2, city3, city4, city5
    state city1, city2, city3, city4, city5

Points to remember 
Don't use space in object key
In case of multiple words for object key, for example Madhya Pradesh use either camelcase madhyaPradesh or underscore madhya_pradesh in between words.
Format code before submit it.
Use actual state and city name

Assignment 2 - Display your name in browser using react javascript library
--------------------------------------------------------------------------
Display your name in browser using react

Delete all files from the src folder except index.js, inside this file write your name to display in browser, for example 

index.js file

import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
"Programming with Harsh"
);

Assignment 3 - Create Class or Functional Components in react 
-------------------------------------------------------------

Create Class or Functional Components in react

Create Main Class Component and call Main component inside index.js file
Create below components and call inside Main Component
Welcome -> Display Welcome message class or functional component 
Login  -> Display Login message class or functional component 
Register -> Display Register message class or functional component 
LoginSuccessful -> Display LoginSuccessful message class or functional component 
RegisterSuccessful -> Display RegisterSuccessful message class or functional component 
ChatList -> Display ChatList message class or functional component 
UserList -> Display UserList message class or functional component 
EditUser  -> Display EditUser message class or functional component 
DocumentList -  -> Display DocumentList message class or functional component 
Logout -> Display Logout message class or functional component 
For reference - https://github.com/programmingwithharsh/react_july25/
Note Once completed, add code in the private comment and mark as done, Format code

Assignment 4 - Display Star based on rating
As discussed Display Star based on rating props, incase 5 rating display 5 Star

Assignment 5 - Implement React Routing

Create menu (Nav.js) which contains Group Chat | Manage Users | Manage Documents | Logout as per screenshot 
When user click on Group Chat call ChatList component 
When user click on Manage Users call UserList component 
When user click on Manage Documents call DocumentList component 
When user click on Logout call Logout component 
By default Welcome component 
Step 1
npm i react-router-dom

Step 2
Create Nav Component, Nav.js which contains below code

import { Link, Outlet } from 'react-router-dom';

function Nav() {
return <>
<nav className="navbar navbar-expand-lg bg-primary">
<div className="container-fluid">
<a className="navbar-brand" href="/">Dashboard</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
<Link className="nav-link active" to="/">Home</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/products">Products</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/addproduct">Add Product</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/title">Title</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/corebootstrap">Core Bootstrap</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/reactbootstrap">React Bootstrap</Link>
</li>
</ul>
</div>
</div>
</nav>
<div className='container-fluid mt-2'>
<Outlet />
</div>
</>
}

export default Nav;

Step 3

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './core-bootstrap/Nav';

render() { // Class Component Lifecycle
console.log("Render - 2");
console.log(this.state);
console.log(this.props);
return <BrowserRouter>
<Routes>
<Route path="/" element={<Nav />}>
<Route index element={<Welcome />} />
<Route path="/products" element={<ProductList products={this.state.products} />} />
<Route path="/addproduct" element={<AddProduct />} />
<Route path="/title" element={<Title username="Tushar" />} />
<Route path="/corebootstrap" element={<CoreBootstrap />} />
<Route path="/reactbootstrap" element={<ReactBoostrap />} />
</Route>
<Route path="/register" element={<Register />} />
</Routes>
</BrowserRouter>
}

Assignment 6 - Display users list from local storage in browser

1. Create UserList class component
2. Define state inside UserList class component, for example below
this.state = {
users: [
],
}

Store below users in local storage using localstorage.setItem

[{
id: 1,
name: "Text User",
email: "textuser@gmail.com"
},
{
id: 2,
name: "Anne Hunter",
email: "annehunter@mail.com"
},
{
id: 3,
name: "Jale Boser",
email: "jale@yahoo.com"
}]

Get item from localstorage, localstorage.getItem and update this.state users 

Use this.setState({
    users: localstorageUsers
})

JSON.stringify - Convert Object into String
JSON.parse - Convert String into Object

3. Iterate this.state.users using map function and display users list in browser, for example

render() { // lifecycle 2
return <div>
<h1>User list from API call</h1>
<table border="1" cellSpacing="0">
<thead>
<tr>
<th>Name</th>
<th>Email</th>
</tr>
</thead>
<tbody>
{
this.state.users.map((item, index) => (
<tr key={index}>
<td>{item.name}</td>
<td>{item.email}</td>
</tr>
))
}
</tbody>
</table>
</div>
}

*/