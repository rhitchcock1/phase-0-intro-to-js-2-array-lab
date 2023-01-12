// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){cats.push('Ralph');}
function destructivelyPrependCat(){cats.unshift('Bob');}
function destructivelyRemoveLastCat(){cats.pop('Ralp');}
function destructivelyRemoveFirstCat(){cats.shift('Bob"');}
function appendCat (){const copyofCats =[...cats,"Broom"]; return copyofCats}
function prependCat (){const copyofCats =["Arnold", ...cats];return copyofCats}
function removeLastCat(){
    return cats.slice(0, cats.length-1);
}

function removeFirstCat() {
    return cats.slice(1)
}
