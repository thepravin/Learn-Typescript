let score: number | string = 33
score = 44
score = "55"

let className : "10th" | "12th" = "10th";
className = "12th"
// className = "5th"; // Error : not assignable


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let pravin: User | Admin = {name: "pravin", id: 334}

pravin = {username: "hc", id: 334}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
  
}

//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data4 : string[]|number[] = ['1','2','4'] // OR all number allowed not mix
const data3: (string | number | boolean)[] = ["1", "2", 3, true] // mix allowed

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"