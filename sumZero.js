function sumZero(array){
    let left = 0;
    let right = array.length-1;

    while(left < right){
        const sum = array[left] + array[right]
        if(sum === 0){
            return [array[left], array[right]]
        }else if (sum >0){
            right ++
        }else{
            left --
        }
    }
}

const result = sumZero([-1,2])
console.log(result)