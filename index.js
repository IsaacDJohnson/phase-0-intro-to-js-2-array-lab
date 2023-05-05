// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}

function appendCat(name){
    const newArray = [...cats, name]
    return newArray
}

function prependCat(name){
    const newArray = [name, ...cats]
    return newArray
}

function removeFirstCat(){
    const newArray = cats.slice(1, cats.length)
    return newArray
}

function removeLastCat(){
    const newArray = cats.slice(0, cats.length - 1)
    return newArray
}