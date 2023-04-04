import React from 'react';
import { useNavigate } from 'react-router-dom';
function UpdateApi(props) {
  const { handler, handle, updateApi } = props;

  const navigate = useNavigate();

  return (
    <div className='container'>
      <h2 className='text-center display-3'>Update your Data</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateApi();
          navigate('/show');
        }}
      >
        <label>Enter your Name</label>
        <input
          name='name'
          value={handle.name}
          onChange={handler}
          type='text'
          className='form-control'
        />

        <label>Enter your Email</label>
        <input
          name='tittle'
          type='text'
          value={handle.tittle}
          onChange={handler}
          className='form-control'
        />

        <label>Enter your Number</label>
        <input
          name='date'
          type='text'
          value={handle.date}
          onChange={handler}
          className='form-control'
        />

        <button className='btn btn-primary mt-2'> Update </button>
      </form>
    </div>
  );
}

export default UpdateApi;
