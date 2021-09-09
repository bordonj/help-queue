import React from "react";
import PropTypes from "prop-types";

// uncontrolled way bc not controlling the state in the form
// controlled way is recommended

function ReusableForm(props) {
  const startingNames = props.ticket ? props.ticket.names : '';
  const startingLocation = props.ticket ? props.ticket.location : '';
  const startingIssue = props.ticket ? props.ticket.issue : '';

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' 
          defaultValue={startingNames}/>
        <input
          type='text'
          name='location'
          placeholder='Location' 
          defaultValue={startingLocation}/>
        <textarea
          name='issue'
          placeholder='Describe your issue.' 
          defaultValue={startingIssue}/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  ticket: PropTypes.object
};

export default ReusableForm;