// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){cats.push('Ralph');}
function destructivelyPrependCat(){cats.unshift('Bob');}
function destructivelyRemoveLastCat(){cats.pop('Ralp');}
function destructivelyRemoveFirstCat(){cats.shift('Bob"');}
function appendCat (){const copyofCats =[...cats,"Broom"]; return copyofCats}
function prependCat (){const copyofCats =["Arnold", ...cats];return copyofCats}
function removeLastCat(){const newCats = cats.slice(2); return newCats}
function removeFirstCat (){const newNewCats= cats.slice(0);return newNewCats}