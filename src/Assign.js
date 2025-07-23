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

Assignment 7 - Consume GET API using React axios module

Create Document List Functional Component, using useEffect, consume below API

https://jsonplaceholder.typicode.com/albums

and display Albums title in the browser

Notes
useState 
useEffect
axios module

Assignment 8 - Implement Redux Setup in react application

Implement Redux Setup in react application

Step 1
npm i redux react-redux

Step 2
Create redux and data folder inside src folder

redux
    reducers.js file
    actions.js file
data
    products.js 

actions.js
https://github.com/programmingwithharsh/react_march25/blob/main/src/redux/actions.js

reducers.js
https://github.com/programmingwithharsh/react_march25/blob/main/src/redux/reducers.js

Step 3
index.js -> Main.js file (current approach)

Create App.js
index.js -> App.js file -> Main.js (revised)

App.js file
https://github.com/programmingwithharsh/react_march25/blob/main/src/App.js

Step 4
Store setup
Update index.js file
index.js -> App.js file

index.js file
https://github.com/programmingwithharsh/react_march25/blob/main/src/index.js

Step 5
call action inside component (dispatch action inside component)

Main.js file
https://github.com/programmingwithharsh/react_march25/blob/main/src/Main.js 

import { removeProduct, addProduct, loadProducts } from './redux/actions';
 componentDidMount() { // call after render, this is the best place where we can call API
        console.log('ComponentDidMount 3');
        this.props.dispatch(removeProduct(1));
        this.props.dispatch(addProduct({
            "productId": 6,
            "productName": "Iphone",
            "productCode": "101",
            "releaseDate": "October 15, 2025",
            "description": "Excellent phone",
            "price": 80000,
            "starRating": 5,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png&quot;
        }));
        this.props.dispatch(loadProducts());
    }

Step 6
Debugging code using Redux Devtool 
https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?pli=1

Note: Mark as done once completed

Assignment 9 - Create Next.js Component

Create below Functional Components

Create Main Component and call Main component inside page.js file, and inside Main component call all below components

Home Page
1. Create HomePage Component and display Home page message.

Header and Footer
2. Create Header Component and display Header Message.
3. Create Footer Component and display Footer Message.

Login Purpose
4. Create Register Component and display register message.
5. Create Login Component and display login message.

Products
6. Create ProductList Component and display product list message.
7. Create AddProduct Component and display add product message.
8. Create EditProduct Component and display edit product message.
9. Create ProductDetail Component and display product detail message.

Category
10. Create CategoryList Component and display category list message.
11. Create AddCategory Component and display add category message.
12. Create EditCategory Component and display edit category message.

Shopping Detail
13. Create ShoppingDetail component and display shopping detail message.

Payment Detail
14. Create PaymentDetail Component and display Payment detail message.

Order Confirmation
15. Create OrderConfirmed Component and display order confirm message.

Cart Details
16. Create CartDetail Component and display cart message.

Admin Purpose
17. Create Admin Component and display admin message.

Assignment 10 - Install Bootstrap in next.js

Install Bootstrap in next.js, below are the steps 

Step 1 - Go inside project and run below command 
npm i bootstrap

Step 2 - For Bootstrap CSS Components
In src/app/layout.js
import 'bootstrap/dist/css/bootstrap.css';

Step 3 - For Bootstrap Javascript Components
Create new component let's say BootstrapClient and use bootstrap.bundle.js inside it

For reference purpose use below link
https://github.com/programmingwithharsh/dashboard_next_june25/blob/main/src/app/bootstrap-client.js
https://github.com/programmingwithharsh/dashboard_next_june25/blob/main/src/app/layout.js

Step 4
Use Bootstrap Classes to test, for example 
https://getbootstrap.com/docs/5.3/components/buttons/
*/