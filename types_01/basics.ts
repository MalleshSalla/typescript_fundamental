type Person = {

  name: string;
  age: number;
};

const printFullName = function(person: Person) {
  return "Hello " + person.name+" is your age is "+ person.age+ " !";
}


console.log(printFullName({name:"mallesh",age:15}))