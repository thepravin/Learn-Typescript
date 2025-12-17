//********************* Decelaration *********************************

const stringArray: string[] = [];
const numberArray: number[] = [];
const anotherWay: Array<number> = [];
const anyArray: any = [];
const unionArray: (number | string)[] = [];

type Users = {
  name: string;
  age: number;
};

const allUser: Users[] = [];

stringArray.push("pravin");
// stringArray.push(34); // Error

numberArray.push(13);
// numberArray.push('string'); // Error

anotherWay.push(45);

allUser.push({ name: "pravin", age: 21 });

anyArray.push("pravin");
anyArray.push(true);
anyArray.push(35);

unionArray.push("pravin");
unionArray.push(35);
// unionArray.push(true); // Error

/*****************************************
 * ready only arrays => can't change values once it assigned
 *
 */

const cities: readonly string[] = ["Pune", "Mumbai"];
// cities.push('Delhi');  // Error : push does not exist on readonly array.

const typeTupleArray: [string, boolean] = ["pravin", false]; // must assign value at time of decleration

//**** 2D array

const array: number[][] = [];

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
