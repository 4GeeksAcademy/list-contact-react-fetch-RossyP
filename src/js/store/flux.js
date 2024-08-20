import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts:[],
			agendas:[],
			contactsNew: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			obteniendoUsuario: () => {
				const actions = getActions()
				
				fetch("https://playground.4geeks.com/contact/agendas/Rossy/contacts")
				.then((response) => {
					if(response.status === 404){
						actions.creandoUsuario()
					}
					return response.json()
				})
				.then((data) => {
					setStore({contacts: data.contacts})
				})
				.catch((error)=> console.log(error))
			},

			// obteniendoContacto: () => {
			// 	// const store = getStore();
			// 	// let listContacts = []
			// 	//store.slugs.forEach((slug)=>{
			// 		fetch(`https://playground.4geeks.com/contact/agendas/Rossy/contacts`)
			// 		.then((response) =>{
			// 			if(response.status === 404){
			// 				actions.creandoContacto()
			// 			}
			// 			return response.json()
						
			// 		})

			// 		.then((data)=>{
			// 			console.log("HOLA", data.contacts)
			// 			setStore({contacts: data.contacts});

			// 			// console.log(listContacts)
			// 		})
			// 		.catch((error)=> console.log(error))
			// },

			// creandoAgenda: () =>{
			// 	fetch(`https://playground.4geeks.com/contact/agendas/Rossy`,{
			// 		method: "POST",
			// 		headers:{
			// 			'Content-Type': 'application/json'
			// 		} ,
			// 	})
			// 	.then((response) => response.json())
			// 	.then((data) => {
			// 		console.log(data)
			// 		if(data.slug){
			// 			// setSwitchGetList(prev => !prev)
			// 			// setNameValue("")
			// 			setStore({agendas: data.slug})
			// 		}
			// 	})
			// },

			creandoUsuario: () => {
				fetch(`https://playground.4geeks.com/contact/agendas/Rossy`,{
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
				})
				.then((response)=>response.json())
				.then((data) =>{
					console.log(data)
				})
				.catch((error)=> console.log(error))
			},

			creandoContacto: (obj) => {
                const actions = getActions();
                fetch('https://playground.4geeks.com/contact/agendas/Rossy/contacts', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": obj.name,
                        "phone": obj.phone,
                        "email": obj.email,
                        "address": obj.address
                    })
                })
                .then((res) => res.json())
                .then((data) => {
                    actions.obteniendoUsuario();
                    console.log(data);
                })
                .catch((err) => console.log(err));
			},


			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
