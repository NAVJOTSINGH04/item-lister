// //examine document object

// //console.dir(document);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);
// document.title="item list";

// console.log(document.doctype);

// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.all[10]);

//GETELEMENTBYID 
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById("main-header");
//console.log(headerTitle);
// headerTitle.textContent='hello'; // this does not pays attention to style 
// headerTitle.innerText='goodbye';
//headerTitle.innerHTML="<h3>go boy</h3>";// this will add html tag 


//to change style 

//headerTitle.style.borderBottom =' solid 3px #000'

// to add the border to main head

//header.style.borderBottom='solid 3px  #000'

//GETELEMENTBYCLASSNAME //

// var  items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].innerHTML='hello';
// items[1].style.fontWeight='bold';
// //items[1].style.backgroundColor='yellow';

// //to make changes in all list items, its an array so we need to use the loop 
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';


// }

//GETELEMENTBYTAGNAME //
//UNCOMMENT THE HTML TAG <LI> TO SEE BELOW CODE EFFECT
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].innerHTML='hello';
// li[1].style.fontWeight='bold';
// //items[1].style.backgroundColor='yellow';

// //to make changes in all list items, its an array so we need to use the loop 
// for(var i=0;i<li .length;i++){
//     li[i].style.backgroundColor='#f4f4f4';


// }

//QUERY SELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'

// this will select first input tag
// var input = document.querySelector('input');
// input.value='hello world'

// to select other input tag

// var submit = document.querySelector('input[type="submit"]')
// submit.value="enter";

// to select first list item

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

//select last item
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='green';


//nth child

// var secondChild= document.querySelector('.list-group-item:nth-child(2)');
// secondChild.style.color= 'blue';


//QUERYSELECTORALL
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='yo yo ';


//TO SELECT ODD NUMBER

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor ="#f4f4f4";
//     even[i].style.backgroundColor='#ccc';
// }



//Traversing the Dom
//var itemList= document.querySelector('#items');
//parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor= '#f4f4f4';
// console.log(itemList.parentNode.parentNode)

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor= '#f4f4f4';
// console.log(itemList.parentElement.parentElement);


// parentNode and parentElement for the most part can be interchangeable 

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='yellow';
//firstChild



//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.innerHTML="hello 1"; 
//lastChild



//LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="hello 4"

//nextSibling

//nextElementSibling


//previousSibling

//previousSibling


// createElement

//Create a div 

// var newDiv= document.createElement('div');


// ADD a class

// newDiv.className='hello';


//add a div


// newDiv.id='hello1';

//Add attr

// newDiv.setAttribute('title','helloDiv');


//Add a text

// var newDivText = document.createTextNode('hello world');

// add a text to div

// newDiv.appendChild(newDivText);

// adding new div to dom

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('h1');



// console.log(newDiv);

// newDiv.style.fontSize = " 30px"

// container.insertBefore(newDiv,h1);


//Events
// var button= document.getElementById('button').addEventListener('click',buttonClick);

// function buttonClick(e){
    //console.log('button clicked');
   //document.getElementById('header-title').textContent='changed';

//document.getElementById('items').textContent="hello"
//document.querySelector("#main").style.backgroundColor='#f4f4f4';

// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList)

//to check typeof event

//console.log(e.type);
 // to check position of mouse in x-axis from the Browser
 //console.log(e.clientX);

// to check position of mouse in y-axis
 //console.log(e.clientY);

// to check position of mouse in x-axis from the acutal elemnt

// console.log(e.offsetX);

// to check position of mouse in y-axis from the actual element

//console.log(e.offsetY);
//}

 //var button= document.getElementById('button');
 //var box= document.getElementById('box'); 
 //button.addEventListener('click',runEvent);
 //button.addEventListener('dblclick',runEvent);
 //button.addEventListener('mousedown',runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);

//box.addEventListener('mousemove',runEvent);
//var itemInput = document.querySelector('input[type="text"]');
//var form =  document.querySelector('form');
//var select = document.querySelector('select');
//itemInput.addEventListener('keydown', runEvent);
//select.addEventListener('change',runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);

//     console.log(e.target.value);

//     document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'


//     //box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
// }


// Project
//variables
var form =document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter= document.getElementById('filter');
// form submit event 

form.addEventListener('submit', addItem);

//delete event

itemList.addEventListener('click' , removeItem);

//filter event

filter.addEventListener('keyup',filterItems);

function addItem(e){
     e.preventDefault();

    //console.log(1);

    //get input value

    var newItem= document.getElementById("item").value;
    // create new li element

    var li = document.createElement('li');
// add class
    li.className='list-group-item';
    // add text node with input value
     li.appendChild(document.createTextNode(newItem));
    // create del button element
    var deleteBtn= document.createElement('button');

    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //apend text node

    deleteBtn.appendChild(document.createTextNode('x'));

    li.appendChild(deleteBtn);


    itemList.appendChild(li);
    
}
// romove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li=e.target.parentElement;   
        itemList.removeChild(li);
        }
        //console.log(1);
    }
}

//filter items

function filterItems(e){
    var text=e.target.value.toLowerCase();
    //console.log(text);
    var items=itemList.getElementsByTagName('li');

    //convert inot array

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}
































