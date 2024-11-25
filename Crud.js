import React, { useState } from 'react';

const FormCrud = () => {
    const [obj, setObj] = useState({ name: "", username: "", email: "", password: "" });
    const [data, setData] = useState(JSON.parse(localStorage.getItem("Data")) || []);

    const handlechange = (e) => {
        const { name, value } = e.target; // Fixed destructuring
        setObj({ ...obj, [name]: value });
        console.log(obj);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const updatedData = [...data, obj];
        setData(updatedData);
        localStorage.setItem("Data", JSON.stringify(updatedData));
        setObj({ name: "", username: "", email: "", password: "" }); 
    };

    const handleDelete = (index) => {
        const updatedData = data.filter((item, i) => i !== index);
        setData(updatedData);
        localStorage.setItem("Data", JSON.stringify(updatedData));
    };


    return (
        <>
            <form>
                <input type="text" name="name" placeholder="Name" id="name" onChange={handlechange} value={obj.name} autoComplete="name" /><br /><br />
                <input type="text" name="username" placeholder="Username" id="username" onChange={handlechange} value={obj.username} autoComplete="username" /><br /><br />
                <input type="email" name="email" placeholder="Email" id='email' onChange={handlechange} value={obj.email} autoComplete="email" /><br /><br />
                <input type="password" name="password" placeholder="Password" id='password' onChange={handlechange} value={obj.password} autoComplete="current-password" /><br /><br />
                <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>

            <table>

                <thead>

                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Password</th>

                </thead>
                
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>

                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td><button onClick={() => handleDelete(index)}>Delete</button></td>

                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </>
    );
}

export default FormCrud;
