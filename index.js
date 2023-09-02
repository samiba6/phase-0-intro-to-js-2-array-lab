// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"];
function  destructivelyAppendCat(name){

    cats.push(name);
}

// destructivelyPrependCat(name)
// 1) prepends a cat to the beginning of the cats array
// destructivelyRemoveLastCat()
// 2) removes the last cat from the cats array
// destructivelyRemoveFirstCat()
// 3) removes the first cat from the cats array
// appendCat(name)
// 4) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
// prependCat(name)
// 5) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
// removeLastCat()
// 6) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
// removeFirstCat()
// 7) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();

}
function appendCat(name){
    return [...cats,name ]
    
}
function prependCat(name){
return [name,...cats];


}
function removeLastCat(){
    return cats.slice(0,cats.length-1)
    
    
    }
    function removeFirstCat(){
        return cats.slice(1,(cats.length))
        
        
        }

