import React from 'react';
import ContactCard from "../../Utils/contactCard/ContactCard";
import "./Contacts.css";
import genID from '../../Utils/genID'
import { ContactConsumer } from '../../../Context/Context';
 

export default function Contacts() {  
  return (
    <div className='cardContainer'>
      <ContactConsumer>
      {value=>{
        return value.map(item => (
          <ContactCard 
          onclick={()=>console.log(item.id)}
          key={genID()}
          id={item.id}
          name={item.name}
          surname={item.surname}
          mobileNum={item.mobileNum}
          />)
        )}}
    </ContactConsumer>
    </div>
  );
}


