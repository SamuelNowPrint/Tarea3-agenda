mostrar_datos();

function mostrar_datos(){
    const ul = document.querySelector('ul');

    fetch('http://www.raydelto.org/agenda.php').then(response => response.json() )
    .then(data => {

        for(var i = 0; i <= data.length; i++){
            const datos = data[i];
            const li = document.createElement('li');
            const span = document.createElement('span');
            const p = document.createElement('p');
         
            p.innerHTML = datos.nombre + " " + datos.apellido; 
            span.innerHTML = datos.telefono;
            

            li.appendChild(p);
            li.appendChild(span);
            ul.appendChild(li);

        }
        
    }).catch(err=>console.log(err))
}

function agregar_nuevo() {
    var nombre = document.getElementById('nombre-id').value;
    var apellido = document.getElementById('apellido-id').value;
    var teléfono = document.getElementById('teléfono-id').value;

    const infoAgenda = {
		    nombre: nombre,
		    apellido: apellido,
		    telefono: teléfono
	}
    fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
            headers: {
                'Accept': 'aplication/json'
            },
        body: JSON.stringify(infoAgenda)
    })
    .then((res) => {
    	return res.json();
    })
    .then((data) => {
		console.log(data)
        
		Swal.fire({
			title: "Todo Listo!",
			text: "Nuevo contacto guardado!",
			icon: "success",
			showConfirmButton: false,
			timer: 1500
		})

		setTimeout(() => {
			form.submit();
		}, 2000)
  })
    
}
