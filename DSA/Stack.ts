
class Stack<T>
{
    private array : T[];

    constructor(){
        this.array = [];
    }

    push(x : T) : void{
        this.array.push(x);
    }

    pop() : T | undefined {
        const ele = this.array.pop();
        return ele;
    }

    top() : T {
        return this.array[this.array.length - 1];
    }

    display() : void{
        console.log(this.array);
    }
}

const st = new Stack<number>();

st.push(2);
st.push(3)
st.push(4);
st.push(5);
st.push(6);

st.display();

const pop = st.pop();
console.log("Pop element is : ", pop);

const topEle = st.top();
console.log("Top element is : ",topEle);


