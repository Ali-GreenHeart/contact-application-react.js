import React, { useState } from 'react';
import PropTypes from "prop-types";
import './Contact.css'
import ContactConsumer from '../../../Context/Context';
import { Link } from 'react-router-dom'
import DeleteForever from '@material-ui/icons/DeleteForever';


export default function Contact() {
  const initialState={
    id:'',
    name:'',
    surname:'',
    createdDate:'',
    modifiedDate:'',
    workNum:'',
    homeNum:'',
    mobileNum:'',
    mobileNum:'',
  }
  const [data, setData] = useState({});
  console.log(`data:`,data)
  const deleteContact=()=>{
    setData({...initialState});
  }
  
  return (
    <>
      <ContactConsumer >
        {
          value => {
            setData(value.detData)
            if(data===null||data===undefined) return <h1>{`data is ${data}`}</h1>
            else{
              const { id, name, surname, createdDate, modifiedDate, mobileNum, homeNum, workNum } = data;
              console.log(data);
              return (
                <div className="container">
                {
                  id === undefined ?
                  <div className="errorMessageContainer">
                      <h1>Please, go the contacts page</h1>
                      <Link className='contactsButton' to='/contacts'>Contacts</Link>
                    </div>
                    :
                    <div>
                      <div className="tabsContainer">
                        <h1 className="id">{id}</h1>
                        <DeleteForever onClick={deleteContact} className="deleteIcon"/>
                      </div>
                      <div className="contactContainer">
                        <h1 className="name">{name}</h1>
                        <h1 className="surname">{surname}</h1>
                        <h2 className="createdDate">{createdDate}</h2>
                        <h2 className="modifiedDate">{modifiedDate}</h2>
                        <h1 className="homeNum">{homeNum}</h1>
                        <h1 className="workNum">{workNum}</h1>
                        <h1 className="mobileNum">{mobileNum}</h1>
                      </div>
                    </div>
                }
              </div>
            )
          }

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