

function frequencyCounter (array1 , array2){

    let obje ={}
    let obj2 ={}
    if(array1.length !== array2.length){
        return false
    }

    for( let item of array1){
        obje[item] = ++obje[item] || 1
    }

    for(let item of array2){
         obj2[item] = ++obj2[item] || 1
    }
    for( let i in obje){
        if(!obj2[i ** 2]){
            return false
        }
       if(obje[i] !== obj2[i ** 2]){
        return false
       }    
    }
 
    return true
    // return Object.keys(obje).length === array1.length
}

console.log(frequencyCounter([1,2,1],[1,1,1]))

/**
 * {
 *  1:1,
 * 4:2,
 * 1:1
 * }
 */