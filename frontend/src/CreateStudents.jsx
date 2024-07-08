import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateStudents() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [addr, setAddr] = useState('');
  const [stream, setStream] = useState('');
  const [year, setYear] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/CreateStudents', { id, name, addr, stream, year })
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => {
        console.error('Error submitting form:', err);

      });
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add Students</h2>
          <div className='mb-2'>
            <label htmlFor="id">Id:</label>
            <input type="text" id="id" name="id" required value={id} onChange={(e) => setId(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="stream">Stream:</label>
            <input type="text" id="stream" name="stream" required value={stream} onChange={(e) => setStream(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="addr">Address:</label>
            <input type="text" id="addr" name="addr" required value={addr} onChange={(e) => setAddr(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="year">Year:</label>
            <input type="number" id="year" name="year" required value={year} onChange={(e) => setYear(e.target.value)} />
          </div>
          <button className='btn btn-success' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateStudents;
