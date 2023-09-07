/*document.getElementById("myText").onclick = function(){
    alert("")
}*/

document.getElementById("Button").onclick = function(){

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

document.getElementById("myButton").onclick = function () {
    var set1 = document.getElementById("mySet1").value;
    var set2 = document.getElementById("mySet2").value;
    var distinctElement = [];
    var sum = 0;

    for (n = 0; n < set1.length; n++) {
        for (j = 0; j < set2.length; j++) {
           if(set1[n] == set2[j]) break;
        }

        if(j === set2.length){
            sum += Number(set1[n])
            distinctElement.push(set1[n])
        }
    }

    for (j = 0; j < set2.length; j++) {
        for (n = 0; n < set1.length; n++) {
           if(set2[j] == set1[n]) break;
        }

        if(n === set1.length){
            sum += Number(set2[j])
            distinctElement.push(set2[j])
        }
    }



    document.getElementById("Distinct").innerHTML = distinctElement;
    document.getElementById("sum").innerHTML = sum;

}

