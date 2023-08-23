/*document.getElementById("myText").onclick = function(){
    alert("")
}*/

document.getElementById("myButton").onclick = function(){

    var mySentence = document.getElementById("myText").value;
    var sum = 0;
    var vowel = 0;

    for(let i = 0; i< mySentence.length; i++){
        switch(mySentence[i]){
            case " ": sum = sum + 1; break;
            case ".": sum = sum + 1; break;
            default:
        }
    }

    for(let i = 0; i< mySentence.length; i++){
        switch(mySentence[i]){
            case 'a': vowel = vowel + 1; break;
            case 'e': vowel = vowel + 1; break;
            case 'i': vowel = vowel + 1; break;
            case 'o': vowel = vowel + 1; break;
            case 'u': vowel = vowel + 1; break;
            case 'y': vowel = vowel + 1; break;
            default:
        }
    }

    //document.write("Your sentence contains" + sum + " words and " + vowel + "vowel.")

    document.getElementById("words").innerHTML = sum ;
    document.getElementById("vowel").innerHTML = vowel ;
 
}


