import { useState, useEffect } from "react";
import axios from 'axios';

function UseEffectExample() {

    const [data, setData] = useState([{ "name": "Ajay" }]); // default data is empty array
    const [users, setUsers] = useState([]);
    /*
        
        Class 
            this.state = {}
            this.setState({})

        Functional
            useState, data is empty array
            setData we use to update data
    */

    useEffect(() => {
        fetch('http://localhost:4000/users',
            {
                method: "GET"
            }
        )
            .then((response) => response.json())
            .then((responseData) => {
                console.log("Fetch", responseData);
                setData(responseData);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(function (response) {
                // handle success
                console.log("Axios", response);
                setUsers(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])


    return <>
        <h1>Use Effect Example - List of Users using fetch method</h1>
        {data.map((item, index) => (
            <div key={index}>
                {item.name}
            </div>
        ))}

        <h1>Use Effect Example - List of Users using axios module</h1>
        {users.map((item, index) => (
            <div key={index}>
                {item.email}
            </div>
        ))}
    </>
}

export default UseEffectExample;