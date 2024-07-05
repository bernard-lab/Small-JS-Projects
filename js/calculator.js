const input = document.querySelector('.input');
const buttons = document.querySelectorAll('button');
const result = document.getElementById('prev');
const specialChars = ['%', '/', '*', '-', '+', '='];
let output = '';

const calculate = (btnValue) => { 
try{    
    if(btnValue === '=' && output !== ''){
            output = eval(output.replace('%', '/100'));   
    }else if(btnValue === 'AC'){
            output = '';
            input.value = '0';
            return;
    }else if(btnValue === 'DEL'){
        if(input.value === '' || input.value === '0' || input.value.length == 1){
            output = '';
            input.value = '0';
            return;
        }else{
            output = output.toString().slice(0, -1);
        }            
    }         
    else{
        if(output === '' && specialChars.includes(btnValue)) return;
        else if(input.value[0] == '0' ){
            output = output = output.toString().slice(0, -1);
        }
        output += btnValue;
    }
    
    input.value = output;
}catch{
    output = '';
    input.value = 'Error';
}
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        calculate(e.target.dataset.value);        
    });
});




 


