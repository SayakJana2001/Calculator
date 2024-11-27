let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == 'BtoD'){
          for(let i=0;i<string.length;i++){
            if(string[i] != '0' && string[i] != '1'){
                alert("Please Enter a Binary Number");
                return null;
            }
          }
          const decimalNumber = parseInt(string, 2);
          const decimalString = decimalNumber.toString();
          input.value = decimalString;
        }
        else if(e.target.innerHTML == 'DtoB'){
            for(let i=0;i<string.length;i++){
                if(string[i] != '0' && string[i] != '1' && string[i] != '2' && string[i] != '3' && string[i] != '4' && string[i] != '5' && string[i] != '6' && string[i] != '7' && string[i] != '8' && string[i] != '9'){
                    alert("Please Enter a Decimal Number");
                    return null;
                }
            }
          const binaryNumber = parseInt(string, 10);
          const binaryString = binaryNumber.toString(2);
          input.value = binaryString;

        }
        else if(e.target.innerHTML == 'DtoO'){
            for(let i=0;i<string.length;i++){
                if(string[i] != '0' && string[i] != '1' && string[i] != '2' && string[i] != '3' && string[i] != '4' && string[i] != '5' && string[i] != '6' && string[i] != '7' && string[i] != '8' && string[i] != '9'){
                    alert("Please Enter a Decimal Number");
                    return null;
                }
            }
          const octalNumber = parseInt(string, 10);
          const octalString = octalNumber.toString(8);
          input.value = octalString;
        }
        else if(e.target.innerHTML == 'OtoD'){
            for(let i=0;i<string.length;i++){
                if(string[i] != '0' && string[i] != '1' && string[i] != '2' && string[i] != '3' && string[i] != '4' && string[i] != '5' && string[i] != '6' && string[i] != '7'){
                    alert("Please Enter a Octal Number");
                    return null;
                }
            }
          const deNumber = parseInt(string, 8);
          const deString = deNumber.toString();
          input.value = deString;
        }
        
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
