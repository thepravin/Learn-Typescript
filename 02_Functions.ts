function sum(num1: number, num2: number) {
  return num1 + num2;
}

sum(2, 3);
// sum('2',3); give error

//********** Default value  */

function sum2(num1: number, num2: number = 10) {
  return num1 + num2;
}

sum2(10);

//*************** Optional parameter */

function sum5(num1: number, num2?: number ) {
  return num1 + (num2 || 10);
}

sum5(10);

//*********** Set Return type to function ***** */

function sum3(num1: number, num2: number): number | string | boolean {
  return 5;
}

function sum6(num1: number, num2: number): void {
  
}

//******************* function take nothing but, return object
function createCourse ():{name:string, price:number}{  
    return {name:"C++",price:4599};
}


//* (in arrow function...)

const sum4 = (num1: number, num2: number): number => {
  return 9;
};

//************  Map ************** */
const heros = ["pravin", "amol", "sachit"];

heros.map((hero) => {
  return `hero is ${hero}`;
});

// set return type
heros.map((hero): string => {
  return `hero is ${hero}`;
});



//****** Unknown  */
/* 
This is useful when describing function types because you can describe functions that accept any value without
 having any values in your function body.
*/

function safeParse(s: string): unknown {
    return JSON.parse(s);
  }
   
;

// ******** never ***********
/* 
  The never type represents values which are never observed. In a return type, this means that the function throws
   an exception or terminates execution of the program.
*/
function fail(msg: string): never {
    throw new Error(msg);
  }


export {};
