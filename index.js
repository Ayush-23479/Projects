// WAYS TO PRINT IN JAVASCPIT
// Java Sript console API

// java scriptvariables
// what arew variables?- containers to store data values
var number1= 34;
var number2= 54;
// console.log(number1+number2);
// data  types in javascript
//numbers
var num1 = 455;
var num2 = 55.9;
//string
var str1= "this is a string";
var str2= 'this is also a string';
// objects
var marks={
    subhum:78,
    ravi:48,
    harry:67
}
// console.log(marks);
//boolens
var a= true;
var b= false;
// console.log(a,b);

var und = undefined;
// console.log(und);
var n =null;
// console.log(n);

var arr =[1,2,3,4,4,"tera baap kon he"]
// console.log(arr);
 
//operators in javascript
//arthematic operators
var a= 30;
var b=40;
// console.log("the value of a+b" ,a+b);
// console.log(" the value of a-b" ,a-b);

// console.log("the value of a*b" ,a*b);
// console.log("the value of a/b" ,a/b);

//asssignment opretors
var c=b;
// c+=2;
// c-=2;
// c*=2;
// c/=2;
// console.log(c);

var x=34;
var y=56;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)
// console.log(x<y)
// console.log(x>y)

//logical operators

//logical end
// console.log(true && true)
// console.log(true && false)
// console.log(false && true )
// console.log(false && false)

//logical or

// console.log(true || true)
// console.log(true || false)
// console.log(false || true )
// console.log(false || false)

//logical not
// console.log(!true)
// console.log(!false)

//functions in javascript
// DRY= do not repeat yourself

function avg(a,b)
{
    return(a+b)/2;
}
c1=avg(4,6);
c2=avg(14,6);
// console.log(c1,c2);


//condition in javascript
var age=4;
//if single if statement
if (age>8)
{
    console.log("you can drink beer");
}
// if-else statement
var age=4;
// if (age>8)
// {
//     console.log("you can drink beer");
// }
// else{
//     console.log("you can drink milk");
// }
//if -else-ladder
// if(ager>32){
//     console.log("you are not kid");
// }
// if else(age>26){
//     console.log("bacche nahi rahe");
// }
// if else(age>24){
//     console.log("bacche nahi rahe");
// }
// if else(age>22){
//     console.log("bacche nahi rahe");
// }   
 var arr =[1,2,3,4,5,6,7];
//  console.log(arr);
// for( var i=0 ;i<arr.length ; i++)
// {
//     if (i==2)
//     {break};

//     console.log(arr[i])}

// arr.forEach(function(element){
//     console.log(element)
// })

// const ac=0;
// ac++;
// let j=o;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
let myarr =["Fan","Camera",34,null,true];
//Array Methods
// myarr.pop();
// myarr.push("harry")
// myarr.shift();
// myarr.unshift();
// console.log(myarr.shift("Harry"))
// console.log(myarr.length);
// const newlen =myarr .unshift("harry");
// console.log(newlen);
let mylovelystring ="Harry is adecent guy";
// console.log(mylovelystring.length);
// console.log(mylovelystring.indexOf("guy"))
// console.log(mylovelystring.slice(0,3));
d = mylovelystring.replace("harry,rohan");
// console.log(d,mylovelystring)


let mydate= new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());

// DOM MANUPULATION
let elem =document.getElementById('click');
// console.log(elem);
let elemclass =document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].style.background ='yellow';
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
// console.log(elem.innerHTML)
// console.log(elem.innerText)

// console.log(elemclass[0].innerHTML)
// console.log(elemclass[0].innerText)

// tn =document.getElementsByName('div');
// console.log(tn);
// createdElement = document.createElement('P');
// createdElement.innerText =" This is paragraph"
// tn[0].appendchild(createdElement)

// //Selecting a querry
// sel = document.querySelector(".container")
// console.log(sel)

// function clicked(){
//     console.log("the button was clicked")
// }
// window.onload =function clicked(){
//     console.log("the button was clicked")
// }

// //events in java script
// firstcontainer.addEventListner(
//     'click',function(){
//         console.log('click hua')
//     }
// )


// Arrow functions
// function add(a,b){
//     return a+b;
// }
summ =(a,b)=>{
    return a+b;
}
// logkaro = ()=>{
//     console.log("I AM YOUR LOG")
// }
//set timeout and set interval
// clr =setTimeout(logkaro,2000);
// clr =setInterval(logkaro,2000);
// java script local storage
// localStorage.setItem('name','harry')
// localStorage
// localStorage.getItem('name')

//json 
obj ={name: 'harry',length:1
, a :{this:"that"}}
jso =JSON.stringify(obj);
console.log(jso)
console.log(typeof jso);
parsed =JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
console.log(parsed);