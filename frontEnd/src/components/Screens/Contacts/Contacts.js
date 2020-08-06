import React, { useContext } from 'react';
import ContactCard from "../../Utils/contactCard/ContactCard";
import "./Contacts.css";
import genID from '../../Utils/genID'
import ContactConsumer from '../../../Context/Context';
import {Link} from "react-router-dom";

export default function Contacts() {
  return (
    <div className='cardContainer'>
      <ContactConsumer>
        {value => {
          return (value.data.map(item => (
            <Link to={`details/${item.id}`} className="contact-link">
            <ContactCard
              onClick={() => {
                value.setDetData(value.getItem(item.id))
                console.log(value.getItem(item.id))
              }}
              key={genID()}
              id={item.id}
              name={item.name}
              surname={item.surname}
              mobileNum={item.mobileNum}
              />
            </Link>
              )
          )
          )
        }
        }
      </ContactConsumer>
</div>
  );
}


