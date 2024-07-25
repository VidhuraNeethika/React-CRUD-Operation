import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [values, setValues] = useState({ name: '', email: '', password: '' }); // useState is a hook that returns an array containing two elements: the current state and a function to update it.
  const navigate = useNavigate(); // for redirecting

  const haddleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    axios.post('http://localhost:3000/userRegistration', values)
      .then(response => {
        console.log(response);
        navigate('/');
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="d-flex flex-column vh-100 bg-light justify-content-center align-items-center">

      <h4>Submit Sample Data</h4>

      <div className="w-50 mt-2 bg-white rounded p-3">

        <form onSubmit={haddleSubmit}>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={e => setValues({ ...values, password: e.target.value })} />
          </div>

          <button type="submit" className="btn btn-dark">Submit</button>

        </form>

      </div>

    </div>
  )
}

export default Create
