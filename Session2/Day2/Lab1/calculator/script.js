const calculate = function(){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("op").value;
    switch (op) {
        case "+":
            alert(a+b);
            break; 
        case "-":
            alert(a-b);
            break; 
        case "*":
            alert(a * b);
            break;
        case "/":
            if(b === 0){
                alert(a/b);
                break; 
            }
            alert("Division not possible.");
            break;
        default:
            alert("Operation Not Supported");
            break;
    }
}