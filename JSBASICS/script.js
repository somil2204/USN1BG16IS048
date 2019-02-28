//decision making
/*var age=18;
if(age<18){
    console.log("minor");
}else if(age>=18){
    console.log("major");

}
//con?true:false
age>18?console.log("major"):console.log("minor");

function sachin(firstname,lastnmae){
    console.log(firstname+''+lastname);

}
sachin('somil','agrawal');

//array
var names=['sachin','ankita','avyaan'];
console.log(names[2]);
console.log(names.length);
names.push("Shrihaan");
names.unshift("rajesh");
console.log(names);*/
//challenge 2
var but = document.getElementById('btn');
but.addEventListener('mouseover',changeonmouseover);
but.addEventListener('mouseout',changeonmouseout);

function changeonmouseover(){
    this.style.background="red";
}

function changeonmouseout(){
    this.style.background="yellow";
}
