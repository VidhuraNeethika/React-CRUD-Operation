import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

    const [getData, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/${id}`)
            .then(response => {
                location.reload();
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="d-flex flex-column vh-100 bg-light justify-content-center align-items-center">
            <h4>Sample Data Set</h4>
            <div className="w-50 mt-2 bg-white rounded p-3">
                <div className="d-flex justify-content-end">
                    <Link to="/create" className="btn btn-dark btn-sm">Add Data</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <Link to={`/read/${data.id}`} className="btn btn-dark btn-sm">Read</Link>
                                        <Link to={`/update/${data.id}`} className="btn btn-outline-dark btn-sm mx-2">Update</Link>
                                        <button onClick={() => handleDelete(data.id)} className="btn btn-dark btn-sm">Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;