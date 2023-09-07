document.getElementById("myButton").onclick = function () {
    let x1 = document.getElementById("x1").value;
    let y1 = document.getElementById("y1").value;
    let z1 = document.getElementById("z1").value;

    let x2 = document.getElementById("x2").value;
    let y2 = document.getElementById("y2").value;
    let z2 = document.getElementById("z2").value;


    let vector1 = [];
    vector1.push(x1)
    vector1.push(y1)
    vector1.push(z1)

    let vector2 = [];
    vector2.push(x2)
    vector2.push(y2)
    vector2.push(z2)


    function dot_product(v1, v2) {
        let s = 0
        let i = 0
        while (i < v1.length) {
            s = v1[i] * v2[i] + s
            i++
        }

        return s;
    }

    P = dot_product(vector1, vector2)
    if (P === 0) {
        conclusion = "They are orthogonal"
    } else conclusion = "they are not orthogonal"



    document.getElementById("vector1").innerHTML = "Vector 1: " + vector1;
    document.getElementById("vector2").innerHTML = "Vector 2: " + vector2;
    document.getElementById("scalar-product").innerHTML = "Scalar product 1: " + P;
    document.getElementById("conclusion").innerHTML = "Conclusion: " + conclusion;

}

function swap(a, b) {
    let tmp = 0;
    tmp = a
    a = b
    b = tmp
}
function buble(ar) {
    for (i = 0; i < ar.length - 1; i++) {
        for (j = 0; j < ar.length - i - 1; j++) {
            if (Number(ar[j]) > Number(ar[j + 1])) {
                //swap(ar[j], ar[j + 1])
                [ar[j], ar[j+1]] = [ar[j+1], ar[j]]
            }
        }
    }

    return ar
}

let arr = []
document.getElementById("button").onclick = function () {
    let element = document.getElementById("element").value

    let arra = arr.concat([element])
    //let n = arra.length;
    
    sortedArray = buble(arra)

    document.getElementById("array").innerHTML = "Sorted Array: " + sortedArray
    arr = arra
}





/*function addSet(){
    let template = set1.map(set => `<li>${set}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
}

addSet();*/