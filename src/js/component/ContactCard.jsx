import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const ContactCard = (props) =>{
    return(
        <div className="card mb-3 g-0 bg-danger" style={{maxWidth: "70%", height:"170px"}}>
            <div className="row g-0">
                <div className="col-md-3 bg-warning d-flex justify-content-center align-items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg" className="img-fluid rounded-center" style={{width:"65%"}} alt="contact"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text"><FontAwesomeIcon icon={faLocationDot} /> {props.address}</p>
                    <p className="card-text"><FontAwesomeIcon icon={faPhone} /> {props.phone}</p>
                    <p className="card-text"><FontAwesomeIcon icon={faEnvelope} /> {props.email}</p>
                </div>
                </div>
            </div>
        </div>
    )
}