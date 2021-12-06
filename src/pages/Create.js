import React, { useState } from 'react';
import {Container,Row,Col, Button} from 'react-bootstrap'; 
import Form from 'react-bootstrap/Form'; 
import '../css/forStructure.css';
import { DataStore } from '@aws-amplify/datastore';
import { Employee } from '../models';

function Create(props){
  /*const [Employees, setPosts] = useState([]);
  useState(()=>{
    const func = async()=>{
      await DataStore.save(
        new Employee({
        "Emp_id": 1020,
        "Emp_name": "Lorem ipsum dolor sit amet",
        "Join_date": "1970-01-01Z",
        "No_work_days": 1020,
        "No_Work_month": 1020,
        "Avg_Annual_Sal": 1020,
        "Avg_sal_thrMon": 1020,
        "Pension_curr_month": 1020,
        "Accumulated_pension": 1020,
        "pension_holder": true
        
      })
    );    
    }
  },[])
 */
const createPost = async () => {
  const post = {
    Emp_name :window.prompt('Employee Name'),
    Emp_id :window.prompt('Employeee id')
  }
  const newPost = await DataStore.save(
    new Employee(post)
  )
    console.log(newPost)
}
  return(
  
    <div className="Create">
        <button onClick={createPost}>Create Employee</button>
    </div>
  /*  <Container>
      
      <h1 class='text-center'>Create Employee</h1>
      <Row className="form_content">
        <Col>
      <Form  >
        <Form.Control  type="id" size="sm" placeholder="Employee ID"></Form.Control>
        
        <Form.Control  type="text" size="sm" placeholder="Employee Name"></Form.Control>
        <Form.Control  type="Salary" size="sm" placeholder="Employee Annual Salary"></Form.Control>
        <Form.Control  type="date" size="sm" placeholder="Employee Joining Date"></Form.Control>
        <Form.Select aria-label="Default select example">
          <option>Pension Holder</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
      
      </Form.Select>
      <Button className="text-center"> Submit</Button>
      </Form>
      </Col>
      </Row>
    </Container>*/
  );
}
export default Create;
