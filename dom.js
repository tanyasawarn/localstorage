// console.dir(document);
// getelementbyid
// const headertitle = document.getElementById('header-title');
// const header=document.getElementById('main-header');
// // console.log(headertitle);
// // headertitle.textContent = 'Hello';
// // headertitle.innerText='GOODBYE';

// //difference between innerText and textcontent is innertext pays attenion to styling
// //howerver textContent will not do so and print exact title 
// //console.log(headertitle.innerHTML);
// header.style.borderBottom = 'solid 3px black';

//sharpener task-3 dom

// const addItem = document.getElementById('main-title');
// addItem.style.backgroundColor= 'red';
// addItem.style.fontWeight= 'bold';

//getelementbyclassname--sharepener 4
// const items= document.getElementsByClassName('list-group-item');
// // console.log(items);
// // items[1].textContent= "hello2";
// //items[1].style.fontWeight = 'bold';
//  items[2].style.backgroundColor = 'green';

//  for(var i=0;i<items.length;i++)
//  {
//     items[i].style.fontWeight = 'bold';
//  }

//getelementbytag name
// const li= document.getElementsByTagName('li');
// // // console.log(items);
// li[1].textContent= "hello2";
// li[1].style.fontWeight = 'bold';
//  li[2].style.backgroundColor = 'green';

//  for(var i=0;i<li.length;i++)
//  {
//     li[i].style.fontWeight = 'bold';
//  }

//query selector
// const header=document.querySelector('.list-group-item:nth-child(2)');
// header.style.color = 'green';

// //const thirditem=document.querySelector('.list-group-item:nth-child(3)');
// //queryselectorall
// const odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor = 'green';
// }

//Traversing the dom

const itemList=document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'black';

//parentelement
itemList.parentElement.style.backgroundColor = 'red';

//better to use children instead of childNodes as it takes line breaks also in the nodeList

//creating div

const newDiv=document.createElement('div');

//adding class
newDiv.className = 'Hi';

//adding id
newDiv.id = 'Hi1';

//creating text node;
const newtextNode = document.createTextNode('Hello World');

//Adding textnode to div
newDiv.appendChild(newtextNode);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

