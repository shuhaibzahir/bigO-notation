
function addUpTo(n){
    let total = 0;
    for(let i = 1; i<=n; i++){
        total += i;
    }
    return total
}

console.time()
addUpTo(1000000)
console.timeEnd()


// here the complexity of time in o(n) and space alse O(1)
// if the n range change the time will be n and space will be constant