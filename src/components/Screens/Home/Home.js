import React from 'react';
import {ContactConsumer}  from "../../../Context/ContactsProvider";
export default function Home() {
  return (
    <>
	<h1>It comes from Home</h1>
    <ContactConsumer>
      {hello=>{
        return <h1>{hello}</h1>
      }}
    </ContactConsumer>
  </>
  );
}