import React from 'react';
import PropTypes from "prop-types";
import './Contact.css'

export default function Contact({id,name,surname,modifiedDate,createdDate, mobileNum, workNum}) {
  return (
    <>
    
    </>
  );
}
Contact.prototype={
  id:PropTypes.number,
  name:PropTypes.string,
  surname:PropTypes.string,
  createdDate:PropTypes.instanceOf(Date),
  modifiedDate:PropTypes.instanceOf(Date),
  mobileNum:PropTypes.string,
  workNum:PropTypes.string,
  homeNum:PropTypes.string,
}