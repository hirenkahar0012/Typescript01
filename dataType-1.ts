let user :string="hiren"
let num:number =30;
let flag:boolean=true;
console.log(user);
console.log(num);
console.log(flag);

let setance :string=`My name is ${user} and my age is ${num+1}`;
console.log(setance)

let greeeting="hello";
console.log(greeeting);

function greet(name:string):string{
    return `Hello,${name}`
}

console.log(greet("alice"));