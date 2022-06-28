/**
 * Referencia al label con sirve para guardar el id del contacto al que se quiere manipular.
 */
const labelId = document.querySelector('#labelId');

/**
 * Ocultar el label que contiene el id.
 */
labelId.style.display = 'none';
/**
 * Guardado el id del contacto que se quiere manipular.
 */
const id = labelId.innerHTML;

/**
 * Función para eliminar el contacto.
 */
const eliminate = async () => {


    const res = await fetch(`http://localhost:8080/contact/${id}`, {
        method: 'DELETE',
        mode: 'cors',
    });

    //const result = await res.json();


};
/**
 * Ejecución de la función que elimina el contacto.
 */
eliminate();


