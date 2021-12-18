let myHeading= document.querySelector('h1');
let myImage= document.querySelector('img');
let myButton=document.querySelector('button');

myImage.addEventListener('click',function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc  === 'images/salon.jpg'){
        myImage.setAttribute('src', 'images/ville.jpg');
    }else{
        myImage.setAttribute('src', 'images/salon.jpg');
    }
})

function setUserName(){
    let myName= prompt('Veillez saisir votre nom.');
    localStorage.setItem('nom',myName);
    myHeading.textContent="Javascript est cool, n'est-ce pas "+myName+ " ? ";
}

/* if(!localStorage.getItem('nom')){
    setUserName();
}else{
    let nom=localStorage.getItem('nom');
    myHeading.textContent="Javascript est cool, n'est-ce pas "+nom+ " ? ";
} */

myButton.addEventListener('click',function(){
    setUserName();
})