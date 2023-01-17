function sildingWindowPattern(string){
    let currentString ="";
    let catched = ""

    for( const str of string){
        if(currentString.indexOf(str) === -1){
            currentString +=str
        }else{
            if(currentString > catched){
                catched=currentString;
            } 
            currentString=str;
        }
    }

    console.log(catched)
}



sildingWindowPattern("hellothere")