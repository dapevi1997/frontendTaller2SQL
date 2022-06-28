/**
 * Referencia al label con sirve para guardar el id del contacto al que se quiere manipular.
 */
const labelId = document.querySelector('#labelId');
/**
 * Referencia al botón que actualiza la fecha de nacimiento.
 */
const btnToUpdateBirthday = document.querySelector('#btnToUpdateBirthday');
/**
 * Ocultar el label que contiene el id.
 */
labelId.style.display = 'none';
/**
 * Guardado el id del contacto que se quiere manipular.
 */
const id = labelId.innerHTML;
/**
 * Callbak del botón "Actualizar fecha" al hacer click en el mismo.
 * @param {*} e variable para llamar a la función "preventDefaul()" para que la página no se reinicie.
 */
const eventb = async (e) => {

    e.preventDefault();

    let birthday = form.birthday.value;


    const res = await fetch(`http://localhost:8080/contact/birthday/${id}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            'birthday': birthday,
          
        })
    });

    //const result = await res.json();


};
/**
 * Creación de un evento click para el botón "Actualizar fecha".
 */
btnToUpdateBirthday.addEventListener('click', eventb)
