import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(result => setStudents(result.data))
      .catch(error => console.log(error));
  }, []);


  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteStudents/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload(); 
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Addr</th>
              <th>stream</th>
              <th>year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}> 
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.addr}</td>
                <td>{student.stream}</td>
                <td>{student.year}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>Delete</button>
                  <Link to={`/update/${students._id}` }className='btn btn-success'>Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
