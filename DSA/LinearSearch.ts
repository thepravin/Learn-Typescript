type pairOfNumberAndString = [number, string];

function linearSearchForString(array : string[], x : string) : pairOfNumberAndString
{
    for(let i = 0; i < array.length; i++) {
        if(array[i] == x) return [i, array[i]]; 
    }
    return [-1, ""];
}


const stringArray2 : string[] = ["abc", "def", "ghi", "jk"];
console.log(linearSearchForString(stringArray2, "jk",));