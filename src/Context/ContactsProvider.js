import React from 'react';

const ContactContext=React.createContext();

function ContactProvider(props) {
    return(
        <ContactContext.Provider value="hello from context">
            {props.children}
        </ContactContext.Provider>
    )
}
const ContactConsumer=ContactContext.Consumer;

export {ContactProvider, ContactConsumer};