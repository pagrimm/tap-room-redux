import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name='name'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control type='text' name='brand'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="number" min="0.01" max="9999.99" step="0.01" name="price"/>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>Alcohol Content</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup.Prepend>
          <Form.Control type="number" min="1" max="100" step="1" name="alcohol"/>
          </InputGroup>
        </Form.Group>
        <div style={{padding: 10}}>
          <Button variant="info" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;