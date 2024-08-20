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
			contactoAEditar: []
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

			eliminarContacto: (id) => {
				const store = getStore()
				fetch(`https://playground.4geeks.com/contact/agendas/Rossy/contacts/${id}`,{
					method: "DELETE"
				})
				.then((response) =>{
					console.log(response)
					if(response.ok){
						let listaFiltrada = store.contacts.filter((item)=>item.id !== id)
						setStore({contacts: listaFiltrada})
					}
					return response.json()
				})
				.catch((error) => console.log(error))
			},

			editarContacto: (obj, id) => {
				let store = getStore()
				let actions = getActions()
				fetch(`https://playground.4geeks.com/contact/agendas/Rossy/contacts/${id}`,{
					method: 'PUT',
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
				.then((response) => response.json())
				.then((data) =>{
					actions.obteniendoUsuario()
					//	actions.setContactoAEditar()
					//setTasksList(tasksList.map(item=> item.id !== editingTaskId ? data : item))
					console.log(data)
				})
			},

			setContactoAEditar: (id) => {
				setStore({ contactoAEditar: id });
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
