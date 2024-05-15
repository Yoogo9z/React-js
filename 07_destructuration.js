
/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 * 
 * exemple: [1, 2, 3] => [1, 2]
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte: 
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */

tab1 = [1, 2, 3]
const extractFirstTwo = ([first, Second]) => [first, Second];

console.log(extractFirstTwo(tab1));

/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 * 
 * exemple: [1, 2, 3] => [2, 3]
*/

tab2 = [1, 2, 3]
// utiliser first a la place de _ fonctionne egalement, mais c'est pas une bonne pratique
const extractRest = ([_, ...Restarray]) =>[...Restarray]; 
console.log(extractRest(tab2));

/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 * 
 * exemple: {name: "toto", age: 42} => "toto"
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */

const tab3 = {
    name: "toto",
    age: 42
}

const extractName = ({name}) => name;
console.log(extractName(tab3));

/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 * 
 * exemple: {name: "toto", password: "1234"}
 * 
 * contrainte: 
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 * 
 */

const compte = {
    name: "toto",
    password: "1234"
};

const {password, ...restObj} = compte;

const removePassword = (compte) => restObj;

console.log(removePassword(compte));

module.exports = { extractFirstTwo, extractRest, extractName, removePassword }