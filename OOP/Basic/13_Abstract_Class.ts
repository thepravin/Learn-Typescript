export {}
// Just like interfaces, abstract classes define a model or contract that other classes must follow. But while an interface only describes the structure of a class without providing implementations, an abstract class can include method declarations and concrete implementations.

// Unlike regular classes, though, abstract classes cannot be instantiated directly – they exist solely as a base from which other classes can inherit their methods and attributes.


// use 'extends' when class inherits from another class or interface inherits from another interface.



// Abstract class that serves as the base for any type of bank account
abstract class BankAccount{
    balance :number;

    constructor(initialBalance: number){
        this.balance = initialBalance
    }

    // concrete method (with implementation)
    deposit(amount: number):void{
        this.balance += amount;
    }

    // Abstract method (must be implemented by subclasses)
    abstract withdraw(amount:number):void;
}


class CurrentAccount extends BankAccount {
    withdraw(amount: number): void{
        const fee = 2;
        const totalAmount = amount + fee;

        if(this.balance >= totalAmount){
            this.balance -= totalAmount;
        } else{
            console.log("Insufficient balance.")
        }
    }
}


class SavingsAccount extends BankAccount {
    withdraw(amount: number):void{
        if(this.balance >= amount){
            this.balance -= amount;
        }else {
            console.log("Insufficient balance.");
        }
    }
}


// Error : cannot instantiate abstract class
const genericAccount = new BankAccount(1000);

