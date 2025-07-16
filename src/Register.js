function Register() {

    const handleSubmit = () => {

        /*

        // GET Form value in a variable let's say

        let user = {
            id: Number(new Date()),
            name: "Text User", // get it from form
            email: "textuser@gmai.com" // get it from form
        }

        let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users))

        */

    }

    return <>
        <form onSubmit={handleSubmit}>
            Fullname <input type="text" id="fullname" />
            Email <input type="email" id="email" />
            Password <input type="text" id="password" />
            Confirm Password <input type="text" id="confirmPassword" />
            <input type="submit" value="Register" />
        </form>
    </>
}

export default Register;