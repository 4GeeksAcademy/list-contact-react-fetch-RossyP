import React from "react";
import { ContactForm } from "../component/ContactForm.jsx";
import { ContactCard } from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";
import { useContext, useState, useEffect } from "react";


export const NewContact= ()=>{

    const {store, actions} = useContext(Context)

    //console.log(store.contactsNew)

    // useEffect(()=>{
    //     actions.creandoContacto()
    // }, [store.slug])

    return(
        <div className="container">
            <ContactForm/>
        </div>
    )
}