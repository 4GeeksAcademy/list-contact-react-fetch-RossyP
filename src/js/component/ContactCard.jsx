import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/contactCard.css"

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
    <div className="card mb-3 g-0" style={{maxWidth: "70%", height:"auto", borderColor: "#a5d2f4",borderWidth: "4px"}}>
       <div className="row g-0 d-flex justify-content-between">
           
           <div className="col-12 col-md-4 d-flex justify-content-center align-items-center p-4" style={{height: "auto", backgroundColor: "#cde8fc"}}>
               <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg" className="img-fluid rounded-center" style={{width:"42%"}} alt="contact"/>
           </div>
         
           <div className="col-12 col-md-8">
               <div className="card-body">
                   <h5 className="card-title fs-1">{contact.name}</h5>
                   <p className="card-text"><FontAwesomeIcon icon={faLocationDot} style={{color: "#2b619e"}}/> {contact.address}</p>
                   <p className="card-text"><FontAwesomeIcon icon={faPhone} style={{color: "#2b619e"}}/> {contact.phone}</p>
                   <p className="card-text"><FontAwesomeIcon icon={faEnvelope} style={{color: "#2b619e"}}/> {contact.email}</p>
               </div>
           </div>
           
           <div className="col-12 d-flex justify-content-end position-absolute pt-2 pe-2">
                <Link to="/newContact">
                   <button id={contact.id} onClick={()=> handleClickEdit(contact.id)} className="bg-transparent border-0"><FontAwesomeIcon icon={faPenToSquare} className="text-success"/></button>
               </Link>
               <button id={contact.id} onClick={()=> handleClickDelete(contact.id)} className="bg-transparent border-0"><FontAwesomeIcon icon={faX} className="text-danger"/></button>
               
           </div> 
       </div>
   </div>
   

            
        // </div>
        
    )
}