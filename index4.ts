// const user: (string | number | boolean)[] = ["nc", 25, true]
let user: [string, number, boolean] 

user = ['nc', 131, true]

let user1: [string, number, boolean]

user1 = ['dev', 105, true]

let rgb: [number, number, number] = [255, 123, 121]

type User5 = [number, string, boolean]

const newUser: User5 = [112, 'example@google.com', true]

newUser[1] = 'nc.com'

type User4 = [number, string]

const newUser1: User4 = [115, 'newexample@google.com']

newUser.push(true)