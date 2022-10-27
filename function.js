let pagina=document.querySelector('.container');
let btn=document.querySelector('.btnHide');

let show=true;

btn.addEventListener("click",()=>{
    if(show==true){
        btn.textContent="Show cars";
        show=false;
    }else{
        btn.textContent="Hide list";
        show=true;
    }

    pagina.classList.toggle("dispare");
});

let btnChange=document.querySelector('.modifica');
let masini=document.querySelector('.schimba');
var inp=document.getElementById('desc');

btnChange.addEventListener("click",()=>{
    masini.textContent=inp.value;
    inp.value=" ";
});

let btnAdd=document.querySelector('.addMobile');
let adaug=document.querySelector('.adauga');
let newElem=document.querySelector('.enum');

btnAdd.addEventListener("click",()=>{
    const element=document.createElement("p");
    element.textContent=adaug.value;//elementul va primi ce vom scrie in input
    newElem.appendChild(element);
    adaug.value="";//sa se stearga ce a fost scrisa in input
})

 let btnRemove=document.querySelector('.removeMobile');

btnRemove.addEventListener("click",()=>{
    let lastChild=newElem.lastChild;
    newElem.removeChild(lastChild);
});

