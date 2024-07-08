import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateStudents() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [addr, setAddr] = useState('');
  const [stream, setStream] = useState('');
  const [year, setYear] = useState('');

  const { id: studentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getStudents/${studentId}`)
      .then(result => {
        setId(result.data.id);
        setName(result.data.name);
        setAddr(result.data.addr);
        setStream(result.data.stream);
        setYear(result.data.year);
      })
      .catch(error => console.log(error));
  }, [studentId]); 
  const Update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateStudents/${id}`, { id, name, addr, stream, year })
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
          <h2>Update Students</h2>
          <div className='mb-2'>
            <label htmlFor="id">Id:</label>
            <input type="text" id="id" name="id" required value={id} onChange={(e) => setId(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="address">Addr:</label>
            <input type="Addr" id="Addr" name="Addr" required value={addr} onChange={(e) => setAddr(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="stream">Stream:</label>
            <input type="text" id="stream" name="stream" required value={stream} onChange={(e) => setStream(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="year">Year:</label>
            <input type="text" id="year" name="year" required value={year} onChange={(e) => setYear(e.target.value)} />
          </div>
          <button className='btn btn-success' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudents;
