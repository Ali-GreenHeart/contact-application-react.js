import React, {useState, useEffect} from 'react';

const ContactContext=React.createContext();

export function ContactProvider(props) {
  const [data, setData] = useState([]);
  const [detData, setDetData]=useState({});
  const url='http://localhost:3002/contacts';
  
  const fetching = async () => {    
    const response=await fetch(url);
    const data=await response.json();
    setData([...data],data); 
  }
  
  useEffect(()=>{
    fetching();
  },[])
  
    const getItem=id=>{
    const contact=data.find(item=>item.id===id);
    console.log(contact);
    return contact;
  }
    return (
        <ContactContext.Provider value={{
          data,
          detData,
          setDetData,
          setData,
          getItem}
          }>
            {props.children}
        </ContactContext.Provider>
    ) 
        }
const ContactConsumer=ContactContext.Consumer;


export default ContactConsumer; 