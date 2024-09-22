function calculator(event){
    event.preventDefault();
    var a = parseInt(document.getElementById('first').value)
var b = document.getElementById('operation').value
var c = parseInt(document.getElementById('second').value)
var result;
    console.log(a,b,c)
    if (b == "+"){
        result = a+c;
    }
    else if (b == "-"){
        result = a-c;
    }
    else if (b == "*"){
        result = a*c;
    }
    else if (b == "/"){
        result= a/c;
    }
    else{
        result = "enter valid operation";
    }
    document.getElementById('result').innerText = "Result: " + result;
}