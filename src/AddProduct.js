import React from 'react';
import { Navigate } from 'react-router-dom';

class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        console.log(this.props);
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        const productName = event.target.elements.productName.value;
        const productCode = event.target.elements.productCode.value;
        const releaseDate = event.target.elements.releaseDate.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const rating = event.target.elements.rating.value;
        const imageUrl = event.target.elements.imageUrl.value;

        const product = { // create new object 
            "id": Number(new Date()),
            "productName": productName,
            "productCode": productCode,
            "releaseDate": releaseDate,
            "description": description,
            "price": price,
            "rating": rating,
            "imageUrl": imageUrl
        }

        debugger

        if (productName === "") {
            alert("Please enter product name");
        } else {
            this.setState({ // whenever state udpate, component rerender
                redirect: true
            })
        }

        let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
        products.push(product);

        localStorage.setItem("products", JSON.stringify(products)); // set item in local storage
        this.props.onAddProduct();
    }

    render() {
        const { redirect } = this.state; // Object Destructuring
        return <div className='m-4 col-xxl-6'>
            {
                redirect && (
                    <Navigate to="/products" />
                )
            }
            <form onSubmit={this.handleSubmit}>

                Product Name <input className='form-control' type='text' placeholder='Enter Product name' name="productName" />

                Product Code <input className='form-control' type='text' placeholder='Enter Product code' name="productCode" />

                Release Date <input className='form-control' type='date' name="releaseDate" />

                Description <input className='form-control' type='text' placeholder='Enter Description' name="description" />

                Price <input className='form-control' type='number' name="price" />

                Rating <input className='form-control' type='number' name="rating" />

                Image Url <input className='form-control' type='text' name="imageUrl" />

                <button className='btn btn-primary mt-2'>Add Product</button>

            </form>
        </div>
    }
}

export default AddProduct;