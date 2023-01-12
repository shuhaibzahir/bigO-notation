/* --------------------------------- o(n*n) --------------------------------- */

/* ---------- this is O(n2). that means it will happend n * n times --------- */

function printAllPairs(range){
    for(let i=0; i<=range; i++){
        for(let j =0; j<=i ; j++){
            console.log(i,j)
        }
    }
}

printAllPairs(4)


/* 
1. here o(n) comes as nested of o(n)
2. so it will take n2 time
*/
