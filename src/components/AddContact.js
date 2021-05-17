import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../actions";
import "./AddContact.css";

const AddContact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [validated, setValidated] = useState(false);
  const [btnText, setBtnText] = useState('Add contact');
  const [btnDis, setBtnDis] = useState(false);  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      let date = Date.parse(Date());
      dispatch(addContact({ id: date, name: name, number: number, star: false }));
      
      setBtnText('Adding...');
      setBtnDis(true);
      setTimeout(() => {
        
      setBtnText('Add contact');
      setBtnDis(false);
      }, 1000);
    }

    setValidated(true);
  };

  
  return (
    <div className="addContact">
      <h1>Add contact</h1>
      <Form
        className="form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        
      >
        <Form.Row>
          <Form.Group hasValidation md="12" controlId="validationCustom01">
            <Form.Label>Contact name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Contact name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength="12"
              minLength="3"
            />
            <Form.Control.Feedback type="invalid">
              Please enter contact name!(3 to 12 characters)
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group hasValidation md="12" controlId="validationCustom02">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              
              required
              type="text"
              pattern="\d+"
              placeholder="Phone number"
              value={number}
              minLength="12"
              maxLength="12"
              onChange={(e) => setNumber(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Provide 12 digits!
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Button disabled={btnDis} block className="subBtn"  type="submit" variant={btnDis ? 'warning' : 'success'}>
            {btnText}
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default AddContact;
