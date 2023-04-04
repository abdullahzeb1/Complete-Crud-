import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddApi() {
  const navigate = useNavigate();
  //state for handle the input
  const [handle, setHandle] = useState('');
  const createApi = () => {
    fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: {
        'content-type': ' application/json',
      },
      body: JSON.stringify(handle),
    });
  };
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  return (
    <div className='container'>
      <h2 className='text-center display-3'>Add New Data</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createApi();
          navigate('/show');
        }}
      >
        <label>Enter your Name</label>
        <input
          name='name'
          onChange={handler}
          type='text'
          className='form-control'
        />

        <label>Enter your Email</label>
        <input
          name='email'
          type='text'
          onChange={handler}
          className='form-control'
        />

        <label>Enter your Number</label>
        <input
          name='number'
          type='text'
          onChange={handler}
          className='form-control'
        />

        <button className='btn btn-primary mt-2'>Show</button>
      </form>
    </div>
  );
}
export default AddApi;
