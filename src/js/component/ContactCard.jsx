import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export const ContactCard = ({contact}) =>{

    const {store, actions} = useContext(Context)
    const navigate = useNavigate();

    console.log(contact)

    const handleClickDelete = (id) => {
        console.log("Soy el boton eliminar" + id)
        actions.eliminarContacto(id)
    }

    const handleClickEdit = (id) => {
        console.log("Soy el EDIT, estoy funcionando" + id)
        actions.setContactoAEditar(id)
    }

    return(
       // <div className=" d-flex justify-content-between align-items-center">
            <div className="card mb-3 g-0 bg-danger" style={{maxWidth: "70%", height:"200px"}}>
                <div className=" row g-0  d-flex justify-content-between">
                    <div className="col-md-4 bg-warning" style={{height: "198px"}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg" className="img-fluid rounded-center" style={{width:"65%"}} alt="contact"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text"><FontAwesomeIcon icon={faLocationDot} /> {contact.address}</p>
                        <p className="card-text"><FontAwesomeIcon icon={faPhone} /> {contact.phone}</p>
                        <p className="card-text"><FontAwesomeIcon icon={faEnvelope} /> {contact.email}</p>
                    </div>
                    </div>

                   <div className="position-absolute d-flex justify-content-end">
                        <button id={contact.id} onClick={()=> handleClickDelete(contact.id)}>X</button>
                        <Link to="/newContact">
                            <button id={contact.id} onClick={()=> handleClickEdit(contact.id)}>E</button>
                        </Link>
                        
                    </div> 
                </div>
            </div>

            
        // </div>
        
    )
}