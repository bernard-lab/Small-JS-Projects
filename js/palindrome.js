const input = document.getElementById('myText');
const result = document.getElementById("result");
const paragraph = document.getElementById("paragraph");

function checkText() {
    const value = input.value;
    const reverseValue = reverseString(value);

    if(value.length == 0){   
        result.innerHTML = "Cannot check empty label"; 
        paragraph.innerHTML = "Type something in the label!";
    }
    else if(value === reverseValue && value != ""){   
        result.innerHTML = "Palindrome"; 
        paragraph.innerHTML = `${value} is equal to ${reverseValue}`;
    }
    else{
        result.innerHTML = "Not Palindrome";
        paragraph.innerHTML = `${value} is not equal to ${reverseValue}`;
    } 
    console.log(value);
    input.value = "";
}

function reverseString(str) {
    return str.split("").reverse().join("");    
}