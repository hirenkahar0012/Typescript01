interface Emp{
    eid:number
    ename:string
};
interface Edept extends Emp
{
    dept:string;
}

let emp:Edept={
    eid:101,
    ename:"Hiren",
    dept :"QA"
};

console.log(emp);