import React from "react";
import './ContactCard.css';
import ContactConsumer from "../../../Context/Context";

export default function ContactCard({ id, name, surname, mobileNum,onClick }) {
    return (
        <div className="grid" onClick={onClick}>
            <div className="signature">
                <div className="icon-container">{id}</div>
                <div className="textContainer">
                <h1 className='name'>{name}</h1>
                <h2 className="surname">{surname}</h2>
                <h3>{mobileNum}</h3>
                </div>
            </div>
        </div>
    );
}
