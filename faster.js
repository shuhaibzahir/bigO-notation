
function addUpTo(n){
    return n * (n + 1) / 2;
}

console.time()
addUpTo(1000000)
console.timeEnd()

 

// here the complexity of time in o(1) and space alse O(1)
// if the n range change the time will be constant and space also