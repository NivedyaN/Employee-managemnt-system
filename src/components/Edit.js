import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [empName,setName]=useState('')
  const [empDesg,setDesg]=useState('')
  const [empSalary,setSalary]=useState(0)
  const [empId,setId]=useState('')

  const navigate=useNavigate()
  const handleUpdate=(event)=>{
        // to prevent auto refresh
        event.preventDefault()
          //find index number of empId that should updated
  var index= Employee.map((item)=>item.empId).indexOf(empId)
  let emp=Employee[index]
  console.log('initially update',emp);

  emp.empId=empId
  emp.empName=empName
  emp.empDesg=empDesg
  emp.empSalary=empSalary
  navigate('/')

  console.log('after update',emp);

  }


  useEffect(()=>{
     setName(localStorage.getItem("empName"))
     setDesg(localStorage.getItem("empDesg"))
     setSalary(JSON.parse(localStorage.getItem("empSalary")))
     setId(localStorage.getItem("empId"))

  },[])
  return (
<div className='my-5 p-5'>
      <h1 className='text-primary'> Update Employee Details</h1>
      <p style={{ 'text-align': 'justify' }}>
        Technical language refers to written or oral communication that has specialized content. The product specification for a new microprocessor, a financial presentation by a senior executive and a design meeting for a new medical device are all examples of technical communication.
        Everyday language involves using common business terms, such as "strategy" and "schedule," that everybody understands.
        The differences between technical and everyday language center on the use of jargon and assumptions about the audience.
        However, there are some benefits to the use of technical language over everyday language.
      </p>
      <div className='row' >
        <div className='col-4'>

          <img  className='mt-5' style={{ "width": "400px"}} 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMwR4J5M3m2K1sXBb11bWI6YJJqbcwl374JaY1LT4qoxp2WcR0IfcrGOJvK9Gq1TjaNE&usqp=CAU"
           alt='no image'>
           </img>
          </div>
        <div className='col-8' >

          <Form className='border mt-3 p-5'>        

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" value={empName} placeholder="Enter employee Name" onChange={(event)=>setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDesg">
              <Form.Control type="text" value={empDesg} placeholder="Enter employee Designation" onChange={(event)=>setDesg(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSalary">
              <Form.Control type="text" value={empSalary} placeholder="Enter employee Salary" onChange={(event)=>setSalary(event.target.value)} />
            </Form.Group>


            <Button onClick={(event)=>handleUpdate(event)} variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </div>

      </div>
    </div>  )
}

export default Edit