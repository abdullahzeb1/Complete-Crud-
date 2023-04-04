import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ShowApi(props) {
  const { editApi } = props;

  const [data, setData] = useState([]);

  //function for deleting the API
  async function delApi(id) {
    var data = await fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE',
    });
    await data.json();
    console.log(data);
  }

  const fetchApi = () => {
    fetch('http://localhost:5000/show')
      .then((res) => res.json())
      .then((user) => {
        setData(user);
      })
      .catch((err) => {
        console.log('API failed to fetch');
      });

    console.log(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className='container'>
      <h2 className='text-center display-3'>All Data</h2>

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pro) => (
            <tr key={pro._id}>
              <td>{pro._id}</td>
              <td>{pro.name}</td>
              <td>{pro.email}</td>
              <td>{pro.number}</td>
              <td>
                <Link
                  to='/update'
                  onClick={() => editApi(pro._id)}
                  className='btn btn-primary'
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => delApi(pro._id)}
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowApi;
