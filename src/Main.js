import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import Star from './Star';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor - 1");
        this.state = {
            address: "Mumbai",
            hobbies: ["Singing", "Music", "Dance", "Chess"]
        }
    }

    updateAddress = () => {
        this.setState({ address: "Delhi" })
    }

    render() { // Class Component Lifecycle
        console.log("Render - 2");
        console.log(this.state);
        console.log(this.props);
        return <div>
            <h1>This is Main Class Component</h1>
            <h2>State is, I am living in {this.state.address}</h2>
            <button onClick={this.updateAddress}>Update Address</button>
            <h2>Props username is {this.props.usernameProps}</h2>
            <h2>Props hobbies is {this.props.hobbiesProps[0]}</h2>
            <h2>Props place is {this.props.birthProps.place}</h2>
            <ProductList />
            <AddProduct />
            <Welcome />
            <Title username="Tushar" />
            <Star rating="5" />
        </div>
    }
}