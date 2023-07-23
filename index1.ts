let name1:string = 'user'

console.log(name1)

function myFunction(name:string, age: number) {
    return `Name is ${name} and age is ${age}`
}


// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: 'hitesh', isPaid: false, email: "n@n.com"}

// createUser(newUser)



function createCourse():{name: string, price: number}{
    // here the return type of function is object
    return {name: 'typescript', price: 399}
}


// type aliases start
// type User = {
//     name: string,
//     email: string,
//     isActive: boolean,
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
}

let myUser: User = {
    _id: '1234',
    name: "n",
    email: "n@example.com",
    isActive: false
}

myUser.email= "a@aexaple.com"
// myUser._id = "1235"


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


let card: cardDetails = {
    cardNumber: '2345',
    cardDate: '15/07/2023',
    cvv: 234
}



const result = myFunction('john', 22)
console.log(result)