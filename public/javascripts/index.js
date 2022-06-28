/**
 * Referencia del la tabla que contiene información de los contactos.
 */
const table = document.querySelector('#tableId');
/**
 * Referencia al formulario que gestiona los datos ingresados por el cliente.
 */
const form = document.querySelector('#form');
/**
 * Referencia al botón guardar contacto.
 */
const btnSaveContact = document.querySelector('#btnSaveContact');

/**
 * Función para llenar la tabla de contactos con la base de datos.
 */
const fillTable = async () => {
    const res = await fetch('http://localhost:8080/contacts', {
        method: 'GET',
        mode: 'cors',
    });

    const result = await res.json();


    for (let index = 0; index < result.length; index++) {

        const row = table.insertRow(-1);
        const cellName = row.insertCell(0);
        const cellNumber = row.insertCell(1);
        const cellEmail = row.insertCell(2);
        const cellBirthday = row.insertCell(3);
        const celltoUpdate = row.insertCell(4);
        const celltoEliminate = row.insertCell(5);


        const id = result[index].id;
        const name = result[index].name;
        const number = result[index].number;
        const email = result[index].email;
        const birthday = result[index].birthday;

        cellName.innerHTML = `<a href="http://localhost:3000/user/toUpdateName/${id}" target="_blank">${name}</a>`;
        cellNumber.innerHTML = `<a href="http://localhost:3000/user/toUpdateNumber/${id}" target="_blank">${number}</a>`;
        cellEmail.innerHTML = `<a href="http://localhost:3000/user/toUpdateEmail/${id}" target="_blank">${email}</a>`;
        cellBirthday.innerHTML = `<a href="http://localhost:3000/user/toUpdateBirthday/${id}" target="_blank">${birthday}</a>`;

        celltoUpdate.innerHTML = `<a href="http://localhost:3000/user/toUpdate/${id}" target="_blank">Actualizar</a>`;
        celltoEliminate.innerHTML = `<a href="http://localhost:3000/user/toEliminate/${id}" target="_blank">Eliminar</a>`;

    }


};
/**
 * Ejecución de la función que llena la tabla de contactos.
 */
fillTable();

/**
 * Callbak del botón "Guardar contacto" al hacer click en el mismo.
 * @param {*} e variable para llamar a la función "preventDefaul()" para que la página no se reinicie.
 */
const saveContact = async (e) => {
    e.preventDefault();

    let name = form.name.value;
    let number = form.number.value;
    let email = form.email.value;
    let birthday = form.birthday.value;


    const res = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            'name': name,
            'number': number,
            'email': email,
            'birthday': birthday,
            'deleted': '0'
        })

    });
    const result = await res.json();
    const { status } = result;
    console.log(status)

    if (status == 500) {
        alert('No se pudo guardar contacto, ingrese datos correctamente');
    }

    window.location.href = "http://localhost:3000/";

};

/**
 * Creación de un evento click para el botón "Guardar contacto".
 */
btnSaveContact.addEventListener('click', saveContact);