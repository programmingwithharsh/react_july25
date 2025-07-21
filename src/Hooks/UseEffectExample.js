import { useState, useEffect } from "react";

function UseEffectExample() {

    const [data, setData] = useState([{ "name": "Ajay" }]); // default data is empty array
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
                console.log(responseData);
                setData(responseData);
            });
    }, []);

    return <>
        <h1>Use Effect Example</h1>
        {data.map((item, index) => (
            <div key={index}>
                {item.name}
            </div>
        ))}
    </>
}

export default UseEffectExample;