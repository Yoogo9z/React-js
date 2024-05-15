
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */
const tableau1 = [1, 5, 8, 7, 9];
const multiplyByTwo = array => array.map(x => x * 2);
console.log(multiplyByTwo(tableau1));

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const tableau2 = ["Eric", "Michel", "Raoul", "Alexandre", "André"];
const filterNameStartByA = array => array.filter(name => name.startsWith("A"));
console.log(filterNameStartByA(tableau2));

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */
const tableau3 = [5, 21, 9, 7, 48];
const sum = array => array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum(tableau3));

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const tableau4 = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }, { id: 3, name: 'Foo' }, { id: 4, name: 'Bar' },];

const findUserById = (array, id) => {
  const user = array.find((x) => x.id === 3)?.name;
  return user ? user : null;
}
console.log(findUserById(tableau4,3));

// const findUserById = (array, id) => array.find(x => x.id === 3)?.name?? null;

// console.log(findUserById(tableau4,3));


module.exports = { multiplyByTwo, filterNameStartByA, sum, findUserById };