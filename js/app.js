import * as UI from './interfaz.js';
import API from './api.js'

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        UI.botonSubir.classList.add('d-none');
        UI.headingResultado.textContent = '';
        UI.divMensajes.textContent = 'Error... Todos los campos son OBLIGATORIOS';
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error')
        }, 2000);
        return;
    }

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI()
}