import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {

    const { id } = useParams(); // useParams is a hook that returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/read/${id}`)
            .then(response => {
                console.log(response);
                setData(response.data[0]);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='d-flex flex-column vh-100 bg-light justify-content-center align-items-center'>

            <h4>Retrieve Data</h4>

            <div className='w-50 mt-2 bg-white rounded p-3'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={data.name} disabled />
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Email</label>
                    <input type="text" className="form-control" value={data.email} disabled />
                </div>

                <div className="mb-3">
                    <Link to='/' className='btn btn-dark'>Back</Link>
                    <Link to={`/update/${data.id}`} className='btn btn-outline-dark ms-1'>Update</Link>
                </div>
            </div>
        </div>
    )
}

export default Read
