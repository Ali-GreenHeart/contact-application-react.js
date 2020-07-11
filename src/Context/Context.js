import React, {useState, useEffect} from 'react';


const ContactContext=React.createContext();

function ContactProvider(props) {
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
    return(
        <ContactContext.Provider value={data}>
            {props.children}
        </ContactContext.Provider>
    ) 
}
const ContactConsumer=ContactContext.Consumer;

export {ContactProvider, ContactConsumer}; 