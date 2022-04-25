import axios from 'axios';

// Type d'action
export const IRAIL_LOADING = 'irail/loading';
export const IRAIL_RESULT = 'irail/result';
export const IRAIL_ERROR = 'irail/error';

// Méthode pour créer d'objet d'action
export const irailLoading = () => ({
    type: IRAIL_LOADING
});

export const irailResult = (data) => ({
    type: IRAIL_RESULT,
    payload: data
});

export const irailError = (errorMessage) => ({
    type: IRAIL_ERROR,
    payload: errorMessage
});

// Méthode qui utilise le middleware "redux-thunk" pour faire un call AJAX
export const fetchLiveboard = (station) => {
    const URL = 'https://api.irail.be/liveboard/';

    // Fonction qui sera executé par le middleware
    return dispatch => {
        // Envoi un action "loading"
        dispatch(irailLoading());

        // Requete ajax avec axios
        axios
        .get(URL, {
            params: {
                station,
                format: 'json',
                lang: 'fr'
            }
        })
        .then(response => {
            // Envoi un action "result"
            dispatch(irailResult(response.data));
            console.log(`succes request ! %c${response.data.station}`, 'color: cyan');
        })
        .catch(e => {
            // Envoi un action "error"
            dispatch(irailError(e.errorMessage));
        });
    };
};