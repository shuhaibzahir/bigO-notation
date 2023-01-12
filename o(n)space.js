/* --------------- here we are going to learn space complexity -------------- */
/* 
1. the space complexity how much space it will take
2. if it will take a constant space we can say O(1)
3. else if will take against n number of input then we can say O(n)
*/


/* ------------------------------ O(n) example ------------------------------ */

function double(arr){
    let newArray = []
    for(let i=0; i<arr.length; i++){
        newArray.push(i * 2)
    }
    return newArray
}

double([1,2,3,4])