let score: number | string = 33


score = 44

score = '55'


// using two type by declaring it by using union 
type User3 = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}
// here type of swami can be user3 or admin
let swami: User3 | Admin = {name: "Smarth", id: 334}

swami = {username: 'swami', id: 334}

// function getDbId(id: number | string){

//     //making some API calls
//     console.log(`DB id is: ${id}`)
// }

getDbId(3)
getDbId('5')

function getDbId(id: number | string){
    if(typeof id === 'string') id.toLowerCase()
}

// array 
const data: number[] = [1, 2, 3, 4, 5]
const data1: string[] = ["1", "2", "3", "4", "5"]
const data2: (string | number | boolean)[] = ["1", "2", "3", "4", "5", 5, true]  // now you can store any type of data inside arrays

let seatAllotMent: "aisle" | "middle" | "window" // we can only assign seatAllotment with the aisle, middle, and window properties

seatAllotMent = "aisle"
seatAllotMent = "middle"
seatAllotMent = "window"
// other than nothing is allowed


