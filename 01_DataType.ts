/**
 * Primitive Types in TS
    
    - string 
    - number -> integers , real
    - boolean
    - undefined
    - null 
    - bigint
    - symbol


    - any
    - unkown
 */

let userId : number = 34;

let isSubmit : boolean = true;


// userId = 'pravin'  // : Error :

console.log(userId)

let  firstName = "Pravin";
// firstName = 22; /* 'number' is not assign to 'string'. compiler auto detect type and make shure it not changes further  */



//----------------------------------------------------------------

// Union of types

let id : number | string = "26";

id = 34;


//---------------------------------------------------------------
 // any : not give type of variable bydefault it is 'any'

 let name : any = 'pravin';
 name = 45;
 name = true;


export {}; // avoid block scop error