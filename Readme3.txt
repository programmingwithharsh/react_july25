React Routing Installation 
React Routing Configuration

Page not found
Navigate using Functional component
Navigate using Class component
Conditional Rendering in JSX
Dynamic Link
Dynamic Url
Get params from url

React Styling
React Styling Inline css
Using External CSS
Reusable Component

ES6 Features
Map and Set
Template Literals
Convert array into string
Convert string into array
Array and Object Destrucuting
Spread operator
Rest of items
Merge array
Merge Object
Debugging
Assignment
Project Update

Routing 
1. Address url or IP address 
2. Hyperlink
3. GET API calls 
4. Iframe 
5. Search engine 
6. Apps 
7. Newsletter or Email or SMS
8. Adds 
9. History 
10. QR code 
11. Browser backward and forward button

http://localhost:3000/ -> Display all components 
http://localhost:3000/login -> Display Login page 
http://localhost:3000/register -> Display Register page 
http://localhost:3000/users -> Display Users page 
http://localhost:3000/editUser -> Display Edit User page 
http://localhost:3000/detailUser -> Display Detail User page 
http://localhost:3000/chats -> Display Chats page 
http://localhost:3000/upload -> Display uploads page


Home | Products | Add Product | Title | Core Bootstrap

Welcome | ProductList | AddProduct | Title | CoreBootstrap | ReactBootstrap


Implement React Routing 
------------------------

Step 1
npm i react-router-dom

Step 2
Create Nav Component, Nav.js which contains below code

import { Link, Outlet } from 'react-router-dom';

Welcome | ProductList | AddProduct | Title | CoreBootstrap | ReactBootstrap

function Nav() {
return (<>
<nav>
<Link to="/">Home</Link>|
<Link to="/addproduct">AddProduct</Link>|
<Link to="/products">Products</Link>|
<Link to="/title">Title</Link>|
<Link to="/app">App</Link>|
<Link to="/users">Users</Link>
</nav>
<div>
<Outlet />
</div>
</>);
}

export default Nav;

Step 3
inside main.js file, we can update routing logic


import { BrowserRouter, Routes, Route } from 'react-router-dom';

render() { // lifecycle
console.log("This is render lifecycle - 2");
console.log(this.state);
return <div>
<BrowserRouter>
<Routes>
<Route path="/" element={<Nav />}>
<Route index element={<Welcome />} />
<Route path="/addproduct" element={<AddProduct />} />
<Route path="/products" element={<ProductList products={this.state.products} />} />
<Route path="/title" element={<Title mobile="iphone" />} />
<Route path="/app" element={<App />} />
<Route path="/users" element={<UserLocalStorage />} />
</Route>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<RegisterClass />} />
</Routes>
</BrowserRouter>
</div>
}

React Rules and Regulations
----------------------------
Each child in a list should have a unique "key" prop.
JSX expressions must have one parent element.
Must call super constructor in derived class before accessing 'this' or returning from derived constructor
Invalid DOM property `class`. Did you mean `className`?

React Without JSX 
React With JSX
React Expression  - {}

<h1>This is Main Class Component</h1>
<h2>State is, I am living in {this.state.address}</h2>
<button onClick={this.updateAddress} className="btn btn-primary">Update Address</button>
<h2>Props username is {this.props.usernameProps}</h2>
<h2>Props hobbies is {this.props.hobbiesProps[0]}</h2>
<h2>Props place is {this.props.birthProps.place}</h2>

http://localhost:3000/products/1 -> Display Product Detail page 
http://localhost:3000/products/2 
http://localhost:3000/products/3
http://localhost:3000/products/4

Product detail 
Get params from url - useParams
Page not found
Navigate using functional or class component

ostraining2025@gmail.com
