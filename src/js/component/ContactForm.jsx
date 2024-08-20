import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ContactForm = () =>{


	const { store, actions } = useContext(Context);
    let navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
        
        const {inputName, inputPhone, inputEmail, inputAddress} = e.target

        const contactoSeleccionado = {
            // name: inputName.value,
            // phone: inputPhone.value,
            // email: inputEmail.value,
            // address: inputAddress.value
        }

        contactoSeleccionado.name = inputName.value
        contactoSeleccionado.phone = inputPhone.value
        contactoSeleccionado.email = inputEmail.value
        contactoSeleccionado.address = inputAddress.value
        
        
        console.log(contactoSeleccionado)

        let contactoExistente = store.contacts.filter((contact)=> contact === contactoSeleccionado)

        if(contactoExistente){
             actions.editarContacto(contactoSeleccionado, store.contactoAEditar)
        }else{
            actions.creandoContacto(contactoSeleccionado)
        }
           
        //actions.editarContacto(contactoSeleccionado, contact.id);
	};


    return(
        <div className="text-black">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="inputPhone" placeholder="Phone"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Address"/>
                </div>
                
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">save</button>
                </div>
            </form>

            <Link to="/">
				<button type="button" className="btn btn-primary">Home</button>
			</Link>
        </div>
    )
}