function sanitize(collection) {
    if (collection instanceof Array){
        
        return [...collection]
         }
         else {
             return Object.values(collection)
         }
}

function myEach(collection, callback) {
    
    for (let element in collection) {
       
        callback(collection[element])
    }
    return collection
}

function myMap(collection, callback) {
    let newArray = sanitize(collection)
    let otherArray = []
    for (let i = 0; i < newArray.length; i++) {
        otherArray.push(callback(newArray[i]))
    }
    return otherArray
}

function myReduce(collection, callback, startValue) {
    let newArray = sanitize(collection)
    let i;
    if (startValue != undefined) {
        i = 0
    }else {
        i = 1
        startValue = newArray[0]
    }
    for (i; i < newArray.length; i++) {
        startValue = callback(startValue, newArray[i], newArray)
    }
    return startValue
    console.log(newArray)
    // console.log(collection)
    // console.log(callback)
    // console.log(acc)
}

function myFind(collection, predicate) {
    let newArray = sanitize(collection)
    for(let i = 0; i < newArray.length; i++) {
        if(predicate(newArray[i])){
            return newArray[i]
        }
    }
}

function myFilter(collection, predicate) {
    let newArray = sanitize(collection)
    let otherArray = []
    for(let i = 0; i < newArray.length; i++) {
        if(predicate(newArray[i])){
            otherArray.push(newArray[i])
        }
    }
    return otherArray
}

function mySize(collection) {
    let newArray = sanitize(collection)
    return newArray.length
}

function myFirst(array, n) {
    let newArray = []
    if (n === undefined) {
        return array[0]
    }
    else{
        for (let i = 0; i < n; i++){
            newArray.push(array[i])
        }
        console.log(newArray)
    }
    return newArray
    
}
function myLast(array, n) {
    let newArray = []
    if (n === undefined) {
        return array[array.length - 1]
    }
    else{
        for (let i = array.length - n; i < array.length; i++){
            newArray.push(array[i])
        }
        console.log(newArray)
    }
    return newArray
    
}

function myKeys(object) {
    let array = []
    for (let element in object) {
        array.push(element)
    }
    return array
}

function myValues(object) {
    let array = []
    for (let element in object) {
        array.push(object[element])
    }
    return array
}

