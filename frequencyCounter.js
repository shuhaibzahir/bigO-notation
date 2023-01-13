

function frequencyCounter (array1 , array2){

    let obje ={}
    if(array1.length !== array2.length){
        return false
    }

    for( let item of array1){
        obje[item * item] =item
    }

    for(let item of array2){
        if(obje[item] && obje[item] !== true){
            obje[item]=true
        }else{
            return false
        }
    }
 
    // return Object.keys(obje).length === array1.length
}

console.log(frequencyCounter([1,2,1],[4,4,1]))

/**
 * {
 *  1:1,
 * 4:2,
 * 1:1
 * }
 */