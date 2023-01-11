// here we are going to learn O(n)
/*
1. Here time will be take proposionally the input
2. when the input increase then time also increase
 */

function addUpto(range) {
    let total = 0;
    for(let i = 1; i<= range; i++){
        total +=i;
    }
    console.log(total)
}

/* here you can see the for loop will run the range of input so 
the operations will happen the range of time that we can calculate in O(n) .
n times it will happend
*/