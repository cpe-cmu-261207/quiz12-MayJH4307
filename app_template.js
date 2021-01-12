//your code here!

let numIN = document.querySelector('#input-number');
let idSubIn = document.querySelector('#input-number');
let n = document.getElementById('input-number');
var nu = idSubIn.value;
let btnsum = document.querySelector('button');
var myid = 620610818;
var sum = 0;
let num = numIN.value;
let div = document.querySelector('div');


btnsum.addEventListener('click' , () => {
    myid += idSubIn.value;
    let template = `
        <p>${idSubIn.value}</P>
        <p>${myid}</p>        
    `;
    div.innerHTML += template;
})

let btnrow = document.querySelector('#input-row');
let btncol = document.querySelector('#input-col');
let btncreate = document.querySelector('#button-create-table');

btncreate.addEventListener('click', () => {
    
})


