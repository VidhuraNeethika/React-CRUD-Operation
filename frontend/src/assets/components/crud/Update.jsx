import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const { id } = useParams(); // useParams is a hook that returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    const [values, setValues] = useState({ name: '', email: '', password: '' }); // useState is a hook that returns an array containing two elements: the current state and a function to update it.
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/read/${id}`)
            .then(response => {
                console.log(response);
                setValues({ ...values, name: response.data[0].name, email: response.data[0].email, password: response.data[0].password })
            })
            .catch(error => console.log(error))
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/update/${id}`, values)
            .then(response => {
                console.log(response);
                navigate('/');
            })
            .catch(error => console.log(error));
    }


    return (
        <div className='d-flex flex-column vh-100 bg-light justify-content-center align-items-center'>
            <h4>Update Data</h4>
            <div className="w-50 mt-2 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} />
                    </div>

                    <button type="submit" className="btn btn-dark">Update</button>

                </form>
            </div>
        </div>
    )
}

export default Update
