let expression =""; 
function press(value){
    expression += value; 
    document.getElementById("display").value = expression;
}
function clearDisplay(){
  expression = "";
  document.getElementById("display").value="";
}
function calculate(){
    try{
        let result = eval(expression);
        document.getElementById("display").value = result; 
        expression = result.toString();
    }catch{
        document.getElementById("display").value="Error";
        expression = "";
    }
}