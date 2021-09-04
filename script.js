function addItem(){
    //Get The Input value and declare it as a variable
let item = document.getElementById("item").value;

// create 1 div with class of row 
let row = document.createElement("div");
let rowClass = document.createAttribute("class");
rowClass.value = "row text-center";

//Set attribute node to Div row
 
row.setAttributeNode(rowClass);

//create another div with class of col-sm-12

let col = document.createElement("div");
let colClass = document.createAttribute("class");
colClass.value = "col-sm-12";

//set attribute node to col

col.setAttributeNode(colClass);

//create p element with class of fs-5 to change font

let para = document.createElement("p");
let paraClass = document.createAttribute("class");
paraClass.value = "fs-1";

//set attribute node to para

para.setAttributeNode(paraClass);


//create text node which contents are  item variable.
let paraText = document.createTextNode(item);

//append text node to paragraph element
para.appendChild(paraText);

//append paragraph element to column div
col.appendChild(para);

//append Col div to Row div
row.appendChild(col);

//select div container to append row to it
let container1 = document.getElementById("container1");

//Finally append row to container one
container1.appendChild(row);

console.log(rowClass);
}