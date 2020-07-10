/*Contacts.js*/
const clone=require('clone');
const db={};

export const defaultData={
    contacts:[
        {
            id:genID(),
            name:'Ali',
            surname:'GreenHeart',
            createdDate:new Date(),
            modifiedDate:new Date(),
            homeNum:'0123456789',
            workNum:'0704930781',
            mobileNum:'0702567891',
        },
        {
            id:genID(),
            name:'AliReza',
            surname:'RedHeart',
            createdDate:new Date(),
            modifiedDate:new Date(),
            homeNum:'0987654321',
            workNum:'0708230749',
            mobileNum:'0702346579',
        },
        {
            id:genID(),
            name:'Foo',
            surname:'SweetieHeart',
            createdDate:new Date(),
            modifiedDate:new Date(),
            homeNum:'098712345',
            workNum:'7890654321',
            mobileNum:'0864124680',
        },
    ]
}

/* get contacts */
 const get=(token)=>{
    let data=db[token]

    if(!data){
        data=db[token]=clone(defaultData);
    }
    return data;
}

/* add contact */
import genID from "./genID";
 const add=(token,contact)=>{
    if(!contact.id) contact.id=genID();
    get(token).contacts.push(contact)
    return contact;
}

/* remove contact */
const remove=(token,id)=>{
    const data=get(token)
    const contact=data.contacts.find(c=>c.id===id)

    if(contact) data.contacts=data.contacts.filter(c=>c !==contact)
    return {contact}; //we exported with spread operator.
}
module.exports={
    get,
    add,
    remove
}