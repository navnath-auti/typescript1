"use strict";
let score = 33;
score = 44;
score = '55';
// here type of swami can be user3 or admin
let swami = { name: "Smarth", id: 334 };
swami = { username: 'swami', id: 334 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`)
// }
getDbId(3);
getDbId('5');
function getDbId(id) {
    if (typeof id === 'string')
        id.toLowerCase();
}
// array 
const data = [1, 2, 3, 4, 5];
const data1 = ["1", "2", "3", "4", "5"];
const data2 = ["1", "2", "3", "4", "5", 5, true]; // now you can store any type of data inside arrays
let seatAllotMent; // we can only assign seatAllotment with the aisle, middle, and window properties
seatAllotMent = "aisle";
seatAllotMent = "middle";
seatAllotMent = "window";
// other than nothing is allowed
