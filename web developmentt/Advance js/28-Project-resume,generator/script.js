function addNewWEField(){
    //console.log("hello");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder',"Enter Here");
     

    let weOb = document.getElementById('we');
    let weAddButtonOb = document.getElementById('weAddButton') ;

    weOb.insertBefore(newNode,weAddButtonOb);
}
  
function  weADD(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder',"Enter Here");

    let aqOb =document.getElementById("aQCall");
    let weAddOb=document.getElementById("weAddBtn");

    aqOb.insertBefore(newNode,weAddOb);
}
