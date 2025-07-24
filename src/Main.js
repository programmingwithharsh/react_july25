import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import CoreBootstrap from './core-bootstrap/CoreBootstrap';
import ReactBoostrap from './react-bootstrap/ReactBoostrap';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './core-bootstrap/Nav';
import UserList from './UserList';
import PageNotFound from './PageNotFound';
import ProductDetail from './ProductDetail';
import HooksExample from './Hooks/HooksExample';
import { removeProduct, addProduct, loadProducts } from './redux/actions';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "Mumbai",
            hobbies: ["Singing", "Music", "Dance", "Chess"],
            products: []
        }
    }

    componentDidMount() {
        let products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId": 3,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            {
                "productId": 4,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
            },
            {
                "productId": 5,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
            }
        ];

        localStorage.setItem("products", JSON.stringify(products));
        this.setState({
            products: JSON.parse(localStorage.getItem("products"))
        })

        this.props.dispatch(removeProduct(1)); // calling remove product action
        this.props.dispatch(addProduct({
            "productId": 6,
            "productName": "iPhone",
            "productCode": "100",
            "releaseDate": "March 19, 2016",
            "description": "iphone is very good phone",
            "price": 80000,
            "starRating": 5,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        }));
        this.props.dispatch(loadProducts());
    }

    updateAddress = () => {
        this.setState({ address: "Delhi" })
    }

    addProduct = () => {
        this.setState({
            products: JSON.parse(localStorage.getItem("products"))
        })
    }

    render() { // Class Component Lifecycle
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome username="Rushabh" />} />
                    <Route path="/products" element={<ProductList products={this.state.products} />} />
                    <Route path="/addproduct" element={<AddProduct onAddProduct={() => this.addProduct()} />} />
                    <Route path="/title" element={<Title username="Tushar" />} />
                    <Route path="/corebootstrap" element={<CoreBootstrap />} />
                    <Route path="/reactbootstrap" element={<ReactBoostrap />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/productDetail/:id" element={<ProductDetail />} />
                    <Route path="/hooks" element={<HooksExample />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    }
}