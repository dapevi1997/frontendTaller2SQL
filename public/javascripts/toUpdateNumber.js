/**
 * Referencia al label con sirve para guardar el id del contacto al que se quiere manipular.
 */
const labelId = document.querySelector('#labelId');
/**
 * Referencia al botón que actualiza el número.
 */
const btnToUpdateNumber = document.querySelector('#btnToUpdateNumber');
/**
 * Ocultar el label que contiene el id.
 */
labelId.style.display = 'none';
/**
 * Guardado el id del contacto que se quiere manipular.
 */
const id = labelId.innerHTML;
/**
 * Callbak del botón "Actualizar número" al hacer click en el mismo.
 * @param {*} e variable para llamar a la función "preventDefaul()" para que la página no se reinicie.
 */
const eventb = async (e) => {

    e.preventDefault();

    let number = form.number.value;


    const res = await fetch(`http://localhost:8080/contact/number/${id}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            'number': number,
          
        })
    });

    //const result = await res.json();

};
/**
 * Creación de un evento click para el botón "Actualizar número".
 */
btnToUpdateNumber.addEventListener('click', eventb)
