//const {sleep} = require("../exercices/10_promise");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */


const { sleep } = require('./10_promise.js');

const usingThen = (callback) => {
    sleep().then(callback);
};

usingThen(() => {
    console.log('La pause de 2 secondes est terminée !');
});


/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async (cb) => {
    await sleep(2000);
    cb();
}

usingAwait(() => {
    console.log('2 secondes se sont passés avant d\'exécuter le callback !');
});

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé

const axios = require("axios");

// Définition d'une fonction asynchrone qui prend en paramètre une URL
const apiResponse = async (url) => {
    // Utilisation de la méthode axios.get pour effectuer une requête HTTP GET à l'URL passée en paramètre
    const reponse = await axios.get(url);
    // Retour de la propriété data de l'objet reponse qui contient le corps de la réponse HTTP sous forme d'objet JSON
    return reponse.data;
}

// Définition de l'URL de l'API à appeler
const url = 'https://jsonplaceholder.typicode.com/todos/1';
// Appel de la fonction apiResponse avec l'URL en paramètre
// Utilisation de la méthode then pour attendre que la Promesse soit résolue et afficher le résultat dans la console
apiResponse(url).then(result => {
    console.log(result);
});


module.exports = { usingThen, usingAwait, apiResponse };