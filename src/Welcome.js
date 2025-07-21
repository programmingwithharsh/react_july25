import React from "react";
// class Welcome extends React.Component {
class Welcome extends React.PureComponent {
    constructor() {
        super();
        console.log('Constructor - 1');
        this.state = {
            username: "Pramod"
        }
    }

    componentDidMount() {
        console.log('ComponentDidMount - 3');
        localStorage.setItem("x", 2);
        localStorage.setItem("username", "Vaibhav Kumar"); // string
        localStorage.setItem("active", true); // boolean
        localStorage.setItem("flowers", ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"]); // array
        localStorage.setItem("user", JSON.stringify({
            id: 1,
            name: "Text User",
            email: "textuser@gmai.com"
        })) // Object
        localStorage.setItem("users", JSON.stringify([{
            id: 1,
            name: "Text User",
            email: "textuser@gmai.com"
        },
        {
            id: 2,
            name: "Anne Hunter",
            email: "anne@gmai.com"
        },
        {
            id: 3,
            name: "Jale Boser",
            email: "jale@gmai.com"
        }
        ])) // Array

        console.log(typeof localStorage.getItem("x"));
        console.log(typeof localStorage.getItem("username"));
        console.log(typeof localStorage.getItem("active"));
        console.log(typeof localStorage.getItem("flowers"));
        console.log(typeof localStorage.getItem("user"));
        console.log(typeof localStorage.getItem("users"));

        console.log(localStorage.getItem("x"));
        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("active"));
        console.log(localStorage.getItem("flowers"));
        console.log(JSON.parse(localStorage.getItem("user")));
        console.log(JSON.parse(localStorage.getItem("users")));
    }

    updateUsername = () => {
        this.setState({
            username: "Rushabh"
        })
    }

    render() {
        console.log('Render - 2');
        console.log(this.state.username);
        return <>
            <h1>This is Welcome Class Component</h1>
            <p>Username is {this.state.username}</p>
            <button className="btn btn-secondary" onClick={this.updateUsername}>Update username</button>
        </>
    }
}

export default Welcome;