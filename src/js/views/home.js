import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";


export const Home = () => {
	// const [agenda, setAgenda] =useState([])
	// const [slugs, setSlugs] =useState([])
	// const [slugDetail, setSlugDetail] = useState([])

	const {store, actions} = useContext(Context)

	// console.log(store.slugs)

	// // function obteniendoAgenda(){
	// // 	fetch("https://playground.4geeks.com/contact/agendas")
	// // 	.then((response) => response.json())
	// // 	.then((data) => {
	// // 		console.log(data.agendas)
	// // 		setAgenda(currentData => currentData.concat(data.agendas))
	// // 		const arraySlugs = data.agendas.map((item)=> item.slug)
	// // 		setSlugs(currentSlug => currentSlug.concat(arraySlugs))
	// // 	})
	// // 	.catch((error)=> console.log(error))
	// // }

	// // function obtenidoContacto(){
	// // 	slugs.forEach((slug)=>{
	// // 		fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`)
	// // 		.then((response) => response.json())
	// // 		.then((data)=>{
	// // 			//console.log(`este en el contacto ${slug}`,data)
	// // 			// setSlugDetail(currentData => currentData.concat(data))
	// // 			setSlugDetail(currentData => currentData.concat(data.contacts));
	// // 		})
	// // 	})
		
	// // }
	
	// useEffect(()=>{
	// 	actions.obteniendoAgenda()
	// 	//obteniendoAgenda()
	// }, [])

	// useEffect(()=>{
	// 	actions.obteniendoContacto()
	// }, [store.slugs])


	// // console.log(slugs)
	// // console.log(slugDetail)

	return(
		<div>
			<div className="row d-flex justify-content-center align-items-center">
				{
					store.contacts.map((contact) => (
						<ContactCard contact={contact} />
					))
				}
			</div>
			
		</div>
	);
}	
