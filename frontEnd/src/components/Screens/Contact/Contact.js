import React, { useState, useEffect, useContext } from 'react';
import PropTypes from "prop-types";
import './Contact.css'
import { Link } from 'react-router-dom';
import ContactConsumer from '../../../Context/Context';

export default function Contact() {
  return (
    <>
      <h1>I do some stuffs but, i couldn't do that. </h1>
      <h1>I should try later</h1>
      <h2>TODO: context api structure apply to details page </h2>
      <ContactConsumer >
        {
          value => {
            const { id, name, surname, createdDate, modifiedDate, mobileNum, homeNum, workNum } = value.detData;
            { console.log('a') }
            { console.log(value.detData) }
            return (
              <>
                <h1>{id}</h1>
                <h1>{name}</h1>
                <h1>{surname}</h1>
                <h2>{createdDate}</h2>
                <h2>{modifiedDate}</h2>
                <h1>{homeNum}</h1>
                <h1>{workNum}</h1>
                <h1>{mobileNum}</h1>
              </>
            )

          }
        }

      </ContactConsumer>
    </>
  );
}
Contact.prototype = {
  id: PropTypes.number,
  name: PropTypes.string,
  surname: PropTypes.string,
  createdDate: PropTypes.instanceOf(Date),
  modifiedDate: PropTypes.instanceOf(Date),
  mobileNum: PropTypes.string,
  workNum: PropTypes.string,
  homeNum: PropTypes.string,
}