import React from "react";
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        console.log("Constructor - 1");
    }

    componentDidMount() {
        localStorage.setItem("users", JSON.stringify([
            {
                id: 1,
                name: "Text User",
                email: "textuser@gmail.com"
            }, {
                id: 2,
                name: "Anne Hunter",
                email: "annehunter@mail.com"
            },
            {
                id: 3,
                name: "Jale Boser",
                email: "jale@yahoo.com"
            }]));

        this.setState({
            users: JSON.parse(localStorage.getItem("users"))
        })
        console.log("ComponentDidMount - 3");
    }

    render() {
        console.log("Render - 2");
        console.log(this.state);
        return <div>
            <h1>User list from API call</h1>
            <table border="1" cellSpacing="0" className="table">
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
}

export default UserList;