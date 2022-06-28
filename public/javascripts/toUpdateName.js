/**
 * Referencia al label con sirve para guardar el id del contacto al que se quiere manipular.
 */
const labelId = document.querySelector('#labelId');
/**
 * Referencia al botón que actualiza el nombre.
 */
const btnToUpdateName = document.querySelector('#btnToUpdateName');
/**
 * Ocultar el label que contiene el id.
 */
labelId.style.display = 'none';
/**
 * Guardado el id del contacto que se quiere manipular.
 */
const id = labelId.innerHTML;
/**
 * Callbak del botón "Actualizar nombre" al hacer click en el mismo.
 * @param {*} e variable para llamar a la función "preventDefaul()" para que la página no se reinicie.
 */
const eventb = async (e) => {

    e.preventDefault();

    let name = form.name.value;
    

    if (name != '') {
        const res = await fetch(`http://localhost:8080/contact/name/${id}`, {
            method: 'PATCH',
            mode: 'cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                'name': name,
              
            })
        });
        const result = await res.json();
        const { status } = result;
        console.log(status)

        if (status == 500) {
            alert('No se pudo actualizar nombre');
        }
    } else{
        alert('No se puede dejar en blanco el campo nombre');
    }

    btnToUpdateName.disabled = true;

};
/**
 * Creación de un evento click para el botón "Actualizar nombre".
 */
btnToUpdateName.addEventListener('click', eventb)
