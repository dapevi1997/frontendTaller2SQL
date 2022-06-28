/**
 * Referencia al label con sirve para guardar el id del contacto al que se quiere manipular.
 */
const labelId = document.querySelector('#labelId');
/**
 * Referencia al botón que actualiza el contacto.
 */
const btnToUpdate = document.querySelector('#btnToUpdate');
/**
 * Ocultar el label que contiene el id.
 */
labelId.style.display = 'none';
/**
 * Guardado el id del contacto que se quiere manipular.
 */
const id = labelId.innerHTML;
/**
 * Callbak del botón "Actualizar contacto" al hacer click en el mismo.
 * @param {*} e variable para llamar a la función "preventDefaul()" para que la página no se reinicie.
 */
const eventb = async (e) => {

    e.preventDefault();

    let name = form.name.value;
    let number = form.number.value;
    let email = form.email.value;
    let birthday = form.birthday.value;

    const res = await fetch(`http://localhost:8080/contact/${id}`, {
        method: 'PUT',
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

    //const result = await res.json();

};
/**
 * Creación de un evento click para el botón "Actualizar contacto".
 */
btnToUpdate.addEventListener('click', eventb)


