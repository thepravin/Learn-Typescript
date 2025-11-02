

function linearSearch<T>(array : T[], x : T) : [number, T] {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == x) return [i, array[i]]; 
    }
    return [-1, x];
}


const array2 : number[] = [1,2,5,1,2,3,54,0,6,-2,3];
console.log(linearSearch<number>(array2, 12));

const stringArray3 : string[] = ["abc", "def", "ghi", "jk"];
console.log(linearSearch<string>(stringArray3, "jk"));
