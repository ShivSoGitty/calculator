function main(){
    var ov = document.getElementById("operation");

    if (ov.value == "+"){
        var add =
        Number(document.getElementById("first").value)+
        Number(document.getElementById("second").value);
    document.getElementById("answer").innerHTML = add
  }
  else if (ov.value == "-"){
      var subtract =
Number(document.getElementById("first").value)-
Number(document.getElementById("second").value);
document.getElementById("answer").innerHTML = subtract
  }
  else if (ov.value == "x"){
    var multiply =
Number(document.getElementById("first").value)*
Number(document.getElementById("second").value);
document.getElementById("answer").innerHTML = multiply
}
else if (ov.value == "÷"){
    var divide =
Number(document.getElementById("first").value)/
Number(document.getElementById("second").value);
document.getElementById("answer").innerHTML = divide
}
    }
