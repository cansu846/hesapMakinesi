//sayfa yuklendigi zaman fonk. calissin
window.onload = ()=>{
    //num classlarını numbers adlı dizide tutar
    var selectedOperator='';
    var leftPart='';
    var rightPart = '';
    var numbers = document.querySelectorAll(".num");
    var operators = document.querySelectorAll(".operator");
    var equation  = document.getElementById("equation");
    var delet = document.getElementById("delete");
    var resultInner =  document.getElementById("resultInner");
    numbers.forEach( (number) =>{
        number.addEventListener("click",()=>{
            resultInner.innerHTML += number.value;
            
            if(selectedOperator == ''){
                leftPart += number.value;
            }
            else{
                rightPart += number.value;
            }
            console.log("numbers fonk: "+selectedOperator);
            console.log("leftPart: "+leftPart);
            console.log("rightPart: "+rightPart);
        }, );
    });
  
    operators.forEach( (operator) =>{
        operator.addEventListener("click",()=>{
            selectedOperator = operator.value;
            resultInner.innerHTML += selectedOperator;
            console.log("operators fonk: "+selectedOperator);
        });
    });

    equation.addEventListener("click", ()=>{
        switch(selectedOperator){
            case '+':
                resultInner.innerHTML = parseFloat(leftPart)+parseFloat(rightPart);
                break;
            case '-':
                resultInner.innerHTML = parseFloat(leftPart)-parseFloat(rightPart);
                break;
            case '*':
                resultInner.innerHTML = parseFloat(leftPart)*parseFloat(rightPart);
                break;
            case '/':
                if(rightPart != '0'){
                    resultInner.innerHTML = parseFloat(leftPart)/parseFloat(rightPart);
                  
                }
                else{
                    alert("Payda Sifir olamaz...");
                }
               
                break;
        }
        leftPart = "";
        rightPart = "";
        selectedOperator = "";
        console.log("leftPart: "+leftPart);
        console.log("rightPart: "+rightPart);
        console.log("selectedOperator: "+selectedOperator);
        
    });

    delet.addEventListener("click", ()=>{
        resultInner.innerHTML = "";
    });








};