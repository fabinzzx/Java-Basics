// var a=10;
// var b=20;
// var c=30;

// console.log("c=",c);
// c=a-b;
// console.log("c=",c);
// c=a+b;
// console.log("c=",c);
// c=a/b
// console.log("c=",c);
// c=a/b;
// console.log("c=",c)
// console.log(a==b)
// console.log(a===b);
// if(a>b&&a>c)
// {
//     console.log(a,"is greater ");
// }
// else if(b>a&&b>c)
// {
//     console.log(b,"is greater");
// }
// else{
//     console.log(c, "is greater");
// }

// let day= prompt("Please enter the day:");
// switch(day)
// {
//     case "mon":console.log("Monday");
//     break;
//     case "tue":console.log("Tuesday");
//     break;
//     case "wed":console.log("Wednesday");
//     break;
//     case "thu":console.log("Thursday");
//     break;
//     case "fri":console.log("Friday");
//     break;
//     case "sat":console.log("Saturday");
//     break
//     case "sun":console.log("Sunday");
//     break;
//     default:console.log("no day entered");
// }

// let day = prompt("Please enter the day:");
// if (day === "mon") {
//     console.log("Monday");
// }
// else if (day ==="tue") {
//     console.log("Tuesday");
// }
// else if (day === "wed") {
//     console.log("Wednesday");
// }
// else if (day === "thu") {
//     console.log("Thursday");
// }
// else if (day === "fri") {
//     console.log("Friday");
// }
// else if (day === "sat") {
//     console.log("Saturday");
// }
// else if (day === "sun") {
//     console.log("Sunday");
// }
// else {
//     console.log("no day entered");
// }
// var i=1;
// var num1;
// let num = prompt("Please enter the limit");
// num1=Number(num);
// do
// {
//     console.log(i);
//     i++;
// }while(i<=num);
var num;
var dep1;
let dep;
const date = new Date();
const n = date.toDateString();
const dep3 = [0];
const time = date.toLocaleTimeString();
while(1) {
    console.log("Enter the operation you want to perform")
    let x = prompt("1.Deposit 2.Withdraw 3.Display Statement 4.Exit");
    num = Number(x);

    switch (num) {
        case 1: deposit1(); break;
        case 2: withdraw(); break;
        case 3: display(); break;
        default: console.log("no value entered");
            break;
    }
    
    if(num==4)
        break;

}
function deposit1() {

    dep = prompt("Enter the money you want to deposit");
    dep1 = Number(dep);
    dep3.push("Deposited ", dep1,'Date: ' + n, 'Time: ' + time,"\n");
    console.log(dep1, "Deposited")
    console.log('Date: ' + n);
    console.log('Time: ' + time);

}
function withdraw() {

    var w1;
    var w2;
    let w = prompt("Enter the money to withdraw")
    w1 = Number(w);
   dep3.push("Withdrawed",w1);
    console.log(w1, "Debited from your account Available balance ")
   
}
function display() {
    console.log(dep3);
}
