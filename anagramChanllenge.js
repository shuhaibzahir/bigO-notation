

const anagramValidate = (string1, string2) => {
    let s1= {} 
    if(string1 === string2){
        return true
    }
    if(string1.length !== string2.length){
        return false
    }

    for( let item of string1){
        s1[item] = ++s1[item] || 1
    }

    for( let item of string2){
        if(!s1[item]){
            return false
        }else{
            s1[item] -=1
        }
    }
    
    return true
    
}

const result = anagramValidate("shh","ssh")
console.log(result)
