/**
 * Default access modifier is 'public'
 */


class Product {
    public name: string;
    private _price: number | undefined;
    readonly category:string; // assign only onces not changable
    readonly tags: string[];
    protected newTags: string;

    constructor(name : string, category:string, price ?: number) {
        this.name = name;
        this.category = category;
        this._price = price;
        this.tags = ["electronics", "mobile"];
        this.newTags = "pravin";
    }

    display() : void {
        console.log("Product name is", this.name, " and price is ", this._price);
    }

    setPrice(p:number) : void {
        if(p <= 0) return;
        this._price = p;
    }

}

const p1 = new Product("Iphone", "electronics", 1000000);
p1.setPrice(-20);
const arr = [10, 20];
arr[0] = 0;
console.log(p1);

//--------------------------------------------------------

class Shop{
    protected shopName = "chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName
    }
}

//------------------------------------------ 

class Walet{
    #balance = 100;  // private

    getBalance(){
        return this.#balance
    }
}

//-------------------------------------------

class EkChai{
    static shopName = "Caffe"

    constructor(public flavour:string){ }
}

console.log(EkChai.shopName)

//-----------------------------------

abstract class Drink{
    abstract make():void
}

class myChai extends Drink{
    make(): void {
        console.log("hi")
    }
}

//--------------------------------------- composition class

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater:Heater){}

    make(){
        this.heater.heat
    }
}

export {};
