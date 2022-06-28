/**
 * Referencia al label con sirve para guardar el id del contacto al que se quiere manipular.
 */
const labelId = document.querySelector('#labelId');
/**
 * Referencia al botón que actualiza el email.
 */
const btnToUpdateEmail = document.querySelector('#btnToUpdateEmail');
/**
 * Ocultar el label que contiene el id.
 */
labelId.style.display = 'none';
/**
 * Guardado el id del contacto que se quiere manipular.
 */
const id = labelId.innerHTML;
/**
 * Callbak del botón "Actualizar email" al hacer click en el mismo.
 * @param {*} e variable para llamar a la función "preventDefaul()" para que la página no se reinicie.
 */
const eventb = async (e) => {

    e.preventDefault();

    let email = form.email.value;

    if (email != '') {

        const res = await fetch(`http://localhost:8080/contact/email/${id}`, {
            method: 'PATCH',
            mode: 'cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                'email': email,
              
            })
        });
        const result = await res.json();
        const { status } = result;
        console.log(status)

        if (status == 500) {
            alert('No se pudo actualizar el email');
        }
        
    }else {
        alert('No se puede dejar en blanco el campo email');
    }

    btnToUpdateEmail.disabled = true;
    
};
/**
 * Creación de un evento click para el botón "Actualizar correo".
 */
btnToUpdateEmail.addEventListener('click', eventb)
