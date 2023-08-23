document.getElementById("myButton").onclick = function () {
    var set1 = document.getElementById("mySet1").value;
    var set2 = document.getElementById("mySet2").value;
    var distinctElement = [];
    var sum = 0;

    /*for (i = 0; i < set1.length; i++) {
        for (j = 0; j < set2.length; j++) {
            switch (set1[i]) {
                case set2[j]: ; break;
                default: if(set1[i]){}
            }
        }
    }*/


    for (i = 0; i < set1.length; i++) {
        switch (set1[i]) {
            case set2[0]: ; break;
            case set2[1]: ; break;
            case set2[2]: ; break;
            case set2[3]: ; break;
            default:  sum = sum + Number(set1[i]); distinctElement.push(set1[i]);break;
        }
    }




    for (j = 0; j < set2.length; j++) {
        switch (set2[j]) {
            case set1[0]: ; break;
            case set1[1]: ; break;
            case set1[2]: ; break;
            case set1[3]: ; break;
            default:  sum = sum + Number(set2[j]); distinctElement.push(set2[j]);break;
        }
    }

    document.getElementById("Distinct").innerHTML = distinctElement;
    document.getElementById("sum").innerHTML = sum;

}




/*function addSet(){
    let template = set1.map(set => `<li>${set}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
}

addSet();*/