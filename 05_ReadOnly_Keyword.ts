type User0 = {
  readonly _id: number;
  name: string;
  age: number;
  creadCard?: number;
};


let user1 : User0 = {
    _id : 1234,
    name: "Pravin",
    age : 28,
    creadCard : 1234567,
}

console.log(user1.age);

// user1._id = 3456; // not change because it is read-only not changable

//**  '?' => is optional paramitar. type of optional is 'undefined'

let user2 : User0 = {
    _id : 1234,
    name: "Pravin",
    age : 28,    
}