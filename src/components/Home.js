import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Employee from '../Employee';
import { useNavigate,Link } from 'react-router-dom';


function Home() {
    const navigate=useNavigate();
   const handleDelete=(empId)=>{
    let index=Employee.map((item)=>item.empId).indexOf(empId)
    Employee.splice(index,1)
    navigate('/')   }
const handleEdit=(empId,empName,empDesg,empSalary)=>{
    localStorage.setItem("empId",empId)
    localStorage.setItem("empName",empName)
    localStorage.setItem("empDesg",empDesg)
    localStorage.setItem("empSalary",empSalary)

}
  return (
          <div className='container'>
          <h1 className='text-center text-primary mt-5'>List of Employees  &nbsp;
              <Link to={'/add'}><Button variant='success'> <i class="fa-solid fa-user-plus"></i> Add</Button></Link>

          </h1>
          <p style={{'text-align': 'justify'}}>
              Technical language refers to written or oral communication that has specialized content. The product specification for a new microprocessor, a financial presentation by a senior executive and a design meeting for a new medical device are all examples of technical communication.
              Everyday language involves using common business terms, such as "strategy" and "schedule," that everybody understands.
              The differences between technical and everyday language center on the use of jargon and assumptions about the audience.
              However, there are some benefits to the use of technical language over everyday language.
          </p>
          <div style={{ margin: "8rem" }}>
              <Table striped bordered hover variant="dark">
                  <thead>
                      <tr>
                          <th>Employee Name</th>
                          <th>Employee Designation</th>
                          <th>Employee Salary</th>
                          <th>Actions</th>

                      </tr>
                  </thead>
                  <tbody>

                      {
                          Employee && Employee.length > 0 ?
                              Employee.map((item) => (

                                  <tr>
                                      <td>{item.empName}</td>
                                      <td>{item.empDesg}</td>
                                      <td>{item.empSalary}</td>
                                      <td>
                                        <Link to={'/edit'}>
                                        <Button onClick={()=>handleEdit(item.empId,item.empName,item.empDesg,item.empSalary)} variant='warning'> <i class="fa-solid fa-user-pen"></i> </Button>
                                        </Link>&nbsp; &nbsp;
                                        <Button onClick={() => handleDelete(item.empId)} variant='danger'><i class="fa-solid fa-trash-can"></i> </Button>
                                      </td>
                                  </tr>
                              ))
                              : "No data to display"
                      }


                  </tbody>
              </Table>
          </div>
      </div>

  )
}

export default Home