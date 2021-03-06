import * as UI from './interfaz.js'

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        UI.divMensajes.textContent = '';
        UI.headingResultado.textContent = '';
        UI.spinner.classList.remove('d-none');
        

        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                UI.spinner.classList.add('d-none');
                if (resultado.lyrics) {
                    UI.formularioBuscar.reset();
                    UI.botonSubir.classList.remove('d-none');
                    const { lyrics } = resultado;
                    UI.divMensajes.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion: ${this.artista} - ${this.cancion}`;
                } else {
                    UI.botonSubir.classList.add('d-none');
                    UI.headingResultado.textContent = '';
                    UI.divMensajes.textContent = 'Letra no encontrada, prueba con otra cancion';
                    UI.divMensajes.classList.add('error');
                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 2000);
                }
            })
    }
}

export default API;