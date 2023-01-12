/* here we are going to study O(1) 
1. it the the constant time 
2. when the input is changed or increased but the operations will heppend one time only
*/

function addUpto(range){
    return range * (range +1) /2;
}


function d(n){
    for(let i = 1; i<= Math.min(3,n); i++){
        console.log(i)
    }
}

/* here you can see the operations will happend one time only */