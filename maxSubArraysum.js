function maxSubArray (array,n){
    let max =0;
    let result =0
    for (let i =0; i<array.length; i++){
        for(let count =0; count<n && count +i < array.length; count++){
            result+=array[i+count]
        }
        if(result > max){
            max =result
        }
        result=0

    }

    console.log(max)
}

// maxSubArray([1,2,5,2,8,1,5],2)


function max (array ,n){
    let temp=0
    let max =0
    if(array.length < n) return null

    for(let i=0; i< n; i++){
        temp+=array[i]
    }
    max = temp

    for(let j= n; j<array.length; j++){
        temp = temp - array[j - n] + array[j]
        max = Math.max(max,temp)
    }

    return max


}

console.log(max([1,2,5,2,8,1,5],2))