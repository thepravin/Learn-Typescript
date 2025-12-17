
/* 
    *->  Order matters.
*/

let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"
// newUser.push(true)


const location: readonly [number,number] = [15,16]
// location = [17,18] // error

const chaiItem: [name:string,price:number] = ["masala",25]



















export {}