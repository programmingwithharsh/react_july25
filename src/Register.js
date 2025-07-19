import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { fullname, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const user = {
            id: Date.now(),
            name: fullname,
            email: email,
            password: password
        };

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        existingUsers.push(user);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        alert("Registration successful!");

        setFormData({
            fullname: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            Fullname <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
            Email <input type="email" id="email" value={formData.email} onChange={handleChange} required />
            Password <input type="password" id="password" value={formData.password} onChange={handleChange} required />
            Confirm Password <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            <input type="submit" value="Register" />
        </form>
    );
}

export default Register;