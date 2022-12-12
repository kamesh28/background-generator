
 /*if(4+3 === 7){
 	console.log("Hello");
 	alert("You are smart");
 }

 /*function declarations*/

 /*function sayHello(){
 	console.log("Helloo");
 }
  sayHello();

  var sayBye = function(){
  	console.log("Bye");
  }

sayBye();*/

/*Every function has must one return statement
parameters = declare inside the function paranthesis
arguments  = passing values to the function
*/

/*function multiply(a,b){
	return a*b;
}
alert(multiply(5,12));*/

/*var a = prompt("Number1");
var b = prompt("Number2");

function sum(a,b)
{
	return a+b;
}

alert(sum);*/

/*var list = ["tiger","cat","bear","bird"];
console.log(list[1]);
Methods 1.list.shift() 2. list.push() 3.list.pop() 4.list.concat() 5.list.length() 6.list.sort()

var user = {
	name : "Sunny",
	age : 33,
	hobby : "Chess"
};*/

//Sign IN Validation


/*var database = [
	{
		username: "sun",
		password: "123"
	},
	{
		username: "moon",
		password: "456"
	},
	{
		username: "star",
		password: "789"
	}
];

var newsfeed = [
		{
			username: "Bobby",
			timeline: "Learning JS"
		},
		{
			username: "Smith",
			timeline: "JS is soo cool"
		}
];

function isUserValid(username,password) {
	for (var i=0; i < database.length; i++){
		if(database[i].username === username && database[i].password === password){
			return true;
		} 
		}
		return false;
}

function signIn(username,password) {
	if (isUserValid(username,password)){
		console.log(newsfeed);
	}else{
		alert("Sorry, Wrong username and password");
	}

	/*if(username === database[0].username && password === database[0].password){
		console.log(newsfeed);
	}else{
		alert("Sorry, wrong username and password");
	}*/
/*}*/

/*var userNamePrompt = prompt('What is username?');
var PasswordPrompt = prompt('What is Password?');

signIn(userNamePrompt,PasswordPrompt);*/

/*For loop*/

/*var todos = [
	"clean room",
	"brush teeth",
	"excercise",
	"study javascript",
	"eat healthy"
	];

var todosImportant = [
	"room",
	"teeth",
	"excercise",
	"javascript",
	"healthy"
	];
var todosLength = todos.length;

	for(var i= 0; i < todosLength; i++){
		console.log(i);
		//todos[i] = todos[i] + "!";
		//todos.pop();
	}

//For each
	todos.forEach(function(todo,i){
		console.log(todo);
	})

//For each second representation
function logTodos(todo,i){
	console.log(todo,i);
}
todos.forEach(logTodos,i);
todosImportant.forEach(logTodos,i);





	//while and do while
	/*var counterOne = 10;
	while (counterOne >0){
		console.log("while",counterOne);
		counterOne--;
	}
	var counterTwo = 10;
	do{
		console.log("do while",counterTwo);
		counterTwo--;
	}while(counterTwo >0);*/

	//For button click me

	/*var button = document.getElementsByTagName("button")[0];

	button.addEventListener("click",function () {
		console.log("CLICK !!!");
	})*/

	//For button enter

	var button = document.getElementById("enter");
	var input = document.getElementById("userinput");
	var ul = document.querySelector("ul");

	function inputLength() {
		return input.value.length;
	}

	function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}

	function addListAfterClick(argument) {
		if(inputLength() > 0){
		createListElement();
		}
	}

	function addListAfterKeyPress(event){
		if(inputLength()> 0 && event.keyCode === 13){
			createListElement();
		}
	}

	//button.addEventListener("click",addListAfterClick);

    //input.addEventListener("keypress",addListAfterKeyPress);

    //For Background generator

    var css = document.querySelector("h3");
    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var body = document.getElementById("gradient");

    function setGradient(){
    	body.style.background =
    						"linear-gradient(to right,"
    						+color1.value
    						+","
    						+color2.value
    						+")";

    	//css.textContent = body.style.background + ";"

    }

    //color1.addEventListener("input",setGradient);

   // color2.addEventListener("input", setGradient);
	
	//Advanced Java Script 
	//1/Scope of a variable

	var b = "Can I access this?";

	function bb(){
		var b = "Hello";
		console.log(b);
	}

	//terenary operator
	function isUserValid(bool) {
		return bool;
	}

	var answer = isUserValid(true)? "You may enter":"Access Denied";
	//Switch statement

	function moveCommand(direction) {
		var whatHappens;

		switch(direction){
			case "forward":
				whatHappens = "you counter a monster";
				break;
			case "left":
				whatHappens = "you arrived home";
				break;
			default:
				whatHappens = "Please enter valid direction";
				break;
		}
		return whatHappens;
	}

	//let, const
	/*If statement do not create new scope while using var but it create new scope while using let - Major diffeerence*/

	var a =1;
	if (true){
		var a = "test";
		alert(a);
	}alert(a);

	const player = "bobby";
	let experience = 100;
	let wizardLevel = "false";

	if(experience >90){
		let wizardLevel = "true";
		console.log("inside",wizardLevel);
	}
	console.log("outside",wizardLevel);
	//object will be called by using obj.player

	const obj = {
			player : 'bobby',
			experience : 100,
			wizardLevel : false

	}

	//using `` backtick in js Template Strings

	const name = "Sally";
	const age = 34;
	const pet = "Horse";

	const greetings = `Hello ${name} your age is ${age-10} . What a ${pet} you have`;

	//default arguments

	function greet(name ='',age =30, pet ='cat') {

		return `Hello your age is ${age-10}. what a ${cat} you have`;
	}

	//Symbol datatype

	let sym1 = symbol();
	let sym2 = Symbol('foo');
	let sym3 = Symbol('foo');

	//sym2 === sym3;
	
	//Arrow functions 

	const add = (a,b) => a+b;

	//closures

	const first = () =>{
		const greet = 'Hi';
		const second = () => {
			alert(greet);
		}
		return second;
	}

	const newFun = first();

	//Currying use multiple functions in single line 

	const multiply = (a,b) => a * b;
	const curriedMultiply = (a) => (b) => a * b;
	curriedMultiply(3);

	//Compose 

	const compose = (f, g) => (a) => f(g(a));
    const sum = (num) => (num) +1;
    compose(sum,sum)(5); 

    //Advanced Arrays

    const array = [1,2,10,16];

    const double =[];

    const newArray = array.forEach(num =>{
    	double.push(num *2);
    })

    console.log("forEach",double);

    //map
    const mapArray = array.map(num => {
    	return num *2 });
    console.log("map",mapArray);

    //filter
    const filterArray = array.filter(num => num >5)
    console.log("filter",filterArray);

    //reduce
    const reduceArray = array.reduce((accumulator,num) =>{
    	return accumulator -num;
    },18);
    console.log("reduce",reduceArray);

    //Advance objects 
    //1. reference type

    var object1 = {value :10};

    var object2 = object1;

    var object3 = {value : 10};

    //2. context type

    const object4 ={
    	a:function(){
    		console.log(this);
    	}
    }

    //Instantiation 

    class Player{
    	constructor(name,type){
    		console.log(this);
    		this.name = name;
    		this.type = name;
    	}
    	introduce(){
    		console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    	}
    }

    class Wizard extends Player{
    	constructor(name,type){
    		super(name,type);
    	}
    	play(){
    		console.log(`Wheeeeee I'm a ${this.type}`);
    	}
    }

    const Wizard1 = new Wizard('SHelly','Healer');
    const Wizard2 = new Wizard('Shawn','Dark Magic');

    //Excercise 12.1 excercise6.js

    [2] === [2] //false
    {} === {}  //false

    const obj1 = {a:5}; //4
    const obj2 = obj1; //4
    const obj3 = obj2; //4
    const obj4 = {a:5};//5
    obj1.a = 4;
     class Animal{
     	constructor(name,type,color){
     		console.log(this);
     		this.name = name;
     		this.type = type;
     		this.color = color;
     	}

     }
     class Mamal extends Animal{
     	constructor(type,name,color){
     		super(name,type,color);
     	}
     	sound(){
     		console.log(`Mooo I'm ${this.name}. I'm ${this.color} ${this.type}`);
     	}
     }
     const Mamalobj = new Mamal('Shelly','cow','brown');

     //ES7 two changes 1.includes 2.exponential
     const pets = ['cat','dog','cow'];
     pets.includes('cow');

     const square = (x) => x**2; //x square

     //Excercise ES7
      const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
      dragons.includes('John');

      const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
      dragons.filter(name => name.includes('John'));

      const power100 = (num) => num**100; //high value if you kept 10000 result is infinity

      power100(10000);

      //ES8
      //1. String padding

      const "Hello".padStart(10);
      const "Hello".padEnd(10);

      //2. Functions after comma

      const fun = (a,b,c,d,) =>{
      	console.log(a);
      }

      //3.Object.values, Object.entries, Object.keys

      let obj = {
      	name1 : 'Sunny',
      	name2 : 'Sri',
      	name3 : 'Dev'
      }

      Object.keys(obj).forEach((key,index) => {
      	console.log(key,obj[key]);
      })

      Object.values(obj).forEach(value =>{
      	console.log(value);
      })

      Object.entries(obj).forEach(value =>{
      	console.log(value);
      })

      Object.entries(obj).map(value =>{
      	return value[1] + value[0].replace('name','');
      })

      //ES8 Excercise

      let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ')

//Debugging

const flattend = [[0,1],[2,3],[4,5]].reduce( (a,b) =>a.concat(b),[]);

//After Debugging
const flattend = [[0,1],[2,3],[4,5]].reduce( (accumulator,array) =>{
	//console.log('array',array);
	//console.log('accumulator',accumulator); Instead of console we can use debugger
	debugger;
	return accumulator.concat(array)
}, []);

//JS Runtime environment
//1. callstack  2. Web API (DOM,AJAX,TIMEOUT) 3.Call back Queue  4. Event loop

console.log('1');
setTimout( () =>{
	console.log('2');
},2000)
console.log('3');
