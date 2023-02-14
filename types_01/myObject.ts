const User = {
    name : "salla mallesh",
    email : "salla@gmail.com",
    isActive: true
}

function createUser({name:string,isPaid:boolean}) {
    console.log(" user created")
}


let newUser = {name:"mallesh",isPaid:false}
createUser(newUser)

function createCourse():{name:string,price:number}{
    return {name:"angular" ,price:399}
}
let course = createCourse()
console.log(course)

export{

}