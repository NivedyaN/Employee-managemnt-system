import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [empName,setName]=useState('')
  const [empDesg,setDesg]=useState('')
  const [empSalary,setSalary]=useState(0)
  const navigate=useNavigate()

  const handleSubmit=(event)=>{
    // to prevent auto refresh
    event.preventDefault()
   

    //generate uuid
    const ids=uuid()
    let uniqueId=ids.slice(0,8)
    let salary=Number(empSalary)
    Employee.push({
      empId:uniqueId,
      empName,
      empDesg,
      empSalary:salary
    })
    navigate('/')
  }

  return (
    <div className='my-5 p-5'>
      <h1 className='text-primary'> Add New Employee Details</h1>
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
              <Form.Control type="text" placeholder="Enter employee Name" onChange={(event)=>setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDesg">
              <Form.Control type="text" placeholder="Enter employee Designation" onChange={(event)=>setDesg(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSalary">
              <Form.Control type="text" placeholder="Enter employee Salary" onChange={(event)=>setSalary(event.target.value)}/>
            </Form.Group>


            <Button onClick={(event)=>handleSubmit(event)} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

      </div>
    </div>
  )
}

export default Add