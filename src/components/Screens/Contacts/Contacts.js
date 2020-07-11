import React,{useContext} from 'react';
import ContactCard from "../../Utils/contactCard/ContactCard";
import "./Contacts.css";
import genID from '../../Utils/genID'
import ContactConsumer from '../../../Context/Context';

export default function Contacts() {  
  return (
      <div className='cardContainer'>
    <ContactConsumer>
      {value=>{
        return (value.data.map(item => (
          <ContactCard 
          onClick={()=>{
            value.setDetData(value.getItem(item.id))
            console.log(value.getItem(item.id))
          }}          
          key={genID()}
          id={item.id}
          name={item.name}
          surname={item.surname}
          mobileNum={item.mobileNum}
          />)
          ))
        }
          }
    </ContactConsumer>
    </div>
  );
}


