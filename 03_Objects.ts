
/**
 * Define types for objects
    - classes
    - interface
 */

type User = {
    name:string;
    subject:string;
}

const User2 : User = {
    name : "Pravin",
    subject : "Typescript"
}


//---

let tea : {
    name : string;
    price: number;
    isHot : boolean;
}

tea = {
    name:"Masala tea",
    price: 25,
    isHot:true,
}

//-----

type Cup = {size:string}
let smallCup : Cup = {size:"200ml"}

let bigCup = {size:"500ml", count:2}

smallCup = bigCup

//------- Partical<> make all type's optional

type Chai = {
    name : string
    price : number
    isHot : boolean
}

const updateChai = (updates : Partial<Chai>)=>{
    console.log(updates)
}

updateChai({price:25})
updateChai({isHot:false})
updateChai({})

//---------- Required<>

type ChaiOrder = {
    name? : string
    quantity?:number
}

const placeOrder = (order:Required<ChaiOrder>)=>{
    console.log(order)
}

placeOrder({name:"pravin",quantity:2})

//--------- Pick<>

type ChaiInfo = {
    name : string
    price : number
    isHot : boolean
    ingredent : string[]
}

type BasicChaiInfo = Pick<ChaiInfo, "name"|"price">;

//----- Omit<> 

type ChaiNew = {
    name:string;
    price:number;
    isHot:boolean;
    secretIngredients:string;
}

type PublicChai = Omit<Chai, "secretIngredients">;
