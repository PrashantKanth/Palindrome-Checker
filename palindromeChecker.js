//Palindrome Function

function palindrome(str) {
    let nstr = str.replace(/[^a-z0-9]/gi,"");

    let newArr = nstr.toLowerCase();

    const reverseString = strg => {
        const splitString = strg.split('');
        const reverseArray = splitString.reverse();
        const joinArray = reverseArray.join('');

        return joinArray;        
    }

    let finalArr = reverseString(newArr);

    if((newArr == finalArr) && newArr != ""){
        return true;
    }else{
        return false;   
    }
    
}

//DOM Manipulation

const formData = document.forms['formData'];

formData.addEventListener('submit', e => {
    e.preventDefault();
    
    //data is the User-Input 
    let data = formData.querySelector('#sent').value;
    
    const CORRECT = ["That is indeed a Palindrome.", "Palindrome Detected.", "Correct."];
    const INCORRECT = ["Incorrect", "Try Again"];
    
    //info is the value of palindromeFunction
    let info = palindrome(data);

    let countCOR = Math.floor(Math.random() * CORRECT.length);
    let countINCOR = Math.floor(Math.random() * INCORRECT.length);

    let style = document.querySelector("#result").style;

    if(info){
        document.querySelector("#reset").value = "Have Another One?"
        style.border="2px solid"
        style.color = "green";
        document.querySelector("#result").innerHTML = CORRECT[countCOR];
    }else{
        document.querySelector("#reset").value = "Retry?"
        style.border="2px solid"
        style.color = "red";
        document.querySelector("#result").innerHTML = INCORRECT[countINCOR];
    }

    if(data == ""){
        document.querySelector("#result").innerHTML= "Enter Something😑"
    }

})

//setting reset functionality
//refreshes webpage
let reset = document.querySelector("#reset");
    
reset.onclick = () => {
    window.location.reload();
}
