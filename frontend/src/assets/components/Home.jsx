import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {

    const [getData, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {getData.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Home;