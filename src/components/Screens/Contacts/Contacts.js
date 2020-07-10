import React, { useEffect, useState } from 'react';
import ContactCard from "../../Utils/contactCard/ContactCard";
import "./Contacts.css";
import genID from '../../Utils/genID'


export default function Contacts() { 
  const [data, setData] = useState([]);
  const url='http://localhost:3002/contacts';

  const fetching = async () => {    
    const response=await fetch(url);
    const data=await response.json();
    setData([...data],data); 
    console.dir(data);    
  }
 
  useEffect(()=>{
    fetching();
  },[])
 
  return (
    <div className='cardContainer'>
      {data.map(item => (
        <ContactCard 
        onclick={()=>console.log(item.id)}
        key={genID()}
        id={item.id}
        name={item.name}
        surname={item.surname}
        mobileNum={item.mobileNum}
        />
      ))}
    </div>
  );
}


