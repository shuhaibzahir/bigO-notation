
function countUniqueValue(array){
    let i = 0;
    for(let j = 1; j < array.length; j++){
        if(array[i] !== array[j]){
            i++;
            array[i]= array[j]
        }
    }
    return i+1
}
//     
// [1,2,3,4,5,6,6,7,6,7,7,7]
//               